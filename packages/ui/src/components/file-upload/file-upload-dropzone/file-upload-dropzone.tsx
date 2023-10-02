import { ComponentChildren, h } from 'preact'
import { useCallback, useState } from 'preact/hooks'

import { Event, EventHandler } from '../../../types/event-handler.js'
import { FocusableComponentProps } from '../../../types/focusable-component-props.js'
import { createClassName } from '../../../utilities/create-class-name.js'
import { createComponent } from '../../../utilities/create-component.js'
import { noop } from '../../../utilities/no-op.js'
import { fileComparator } from '../private/file-comparator.js'
import styles from './file-upload-dropzone.module.css'

export interface FileUploadDropzoneProps
  extends FocusableComponentProps<HTMLInputElement> {
  acceptedFileTypes?: Array<string>
  children: ComponentChildren
  multiple?: boolean
  onBlur?: EventHandler.onBlur<HTMLInputElement>
  onChange?: EventHandler.onChange<HTMLInputElement>
  onDragEnd?: EventHandler.onDragEnd<HTMLInputElement>
  onDragEnter?: EventHandler.onDragEnter<HTMLInputElement>
  onDragOver?: EventHandler.onDragOver<HTMLInputElement>
  onDrop?: EventHandler.onDrop<HTMLInputElement>
  onSelectedFiles?: EventHandler.onSelectedFiles
}

export const FileUploadDropzone = createComponent<
  HTMLInputElement,
  FileUploadDropzoneProps
>(function (
  {
    acceptedFileTypes = [],
    blurOnEscapeKeyDown = true,
    children,
    multiple = false,
    onBlur = noop,
    onChange = noop,
    onDragEnd = noop,
    onDragEnter = noop,
    onDragOver = noop,
    onDrop = noop,
    onKeyDown = noop,
    onSelectedFiles = noop,
    propagateEscapeKeyDown = true,
    ...rest
  },
  ref
) {
  const [isDropActive, setIsDropActive] = useState<boolean>(false)

  const handleBlur = useCallback(
    function (event: Event.onBlur<HTMLInputElement>) {
      onBlur(event)
      setIsDropActive(false)
    },
    [onBlur]
  )

  const handleChange = useCallback(
    function (event: Event.onChange<HTMLInputElement>) {
      onChange(event)
      const fileList = event.currentTarget.files
      if (fileList === null) {
        throw new Error('`event.currentTarget.files` is `null`')
      }
      const files = parseFileList({ acceptedFileTypes, fileList })
      if (files.length > 0) {
        onSelectedFiles(files)
      }
    },
    [acceptedFileTypes, onChange, onSelectedFiles]
  )

  const handleDragEnter = useCallback(
    function (event: Event.onDragEnter<HTMLInputElement>) {
      onDragEnter(event)
      event.preventDefault()
    },
    [onDragEnter]
  )

  const handleDragOver = useCallback(
    function (event: Event.onDragOver<HTMLInputElement>) {
      onDragOver(event)
      event.preventDefault()
      setIsDropActive(true)
    },
    [onDragOver]
  )

  const handleDragEnd = useCallback(
    function (event: Event.onDragEnd<HTMLInputElement>) {
      onDragEnd(event)
      event.preventDefault()
      setIsDropActive(false)
    },
    [onDragEnd]
  )

  const handleDrop = useCallback(
    function (event: Event.onDrop<HTMLInputElement>) {
      onDrop(event)
      if (event.dataTransfer === null) {
        throw new Error('`event.dataTransfer` is `null`')
      }
      event.preventDefault()
      const fileList = event.dataTransfer.files
      const files = parseFileList({ acceptedFileTypes, fileList })
      if (files.length > 0) {
        onSelectedFiles(files)
      }
      setIsDropActive(false)
    },
    [acceptedFileTypes, onDrop, onSelectedFiles]
  )

  const handleKeyDown = useCallback(
    function (event: Event.onKeyDown<HTMLInputElement>) {
      onKeyDown(event)
      if (event.key === 'Escape') {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        if (blurOnEscapeKeyDown === true) {
          event.currentTarget.blur()
        }
      }
    },
    [blurOnEscapeKeyDown, onKeyDown, propagateEscapeKeyDown]
  )

  return (
    <div
      class={createClassName([
        styles.fileUploadDropzone,
        isDropActive === true ? styles.isDropActive : null
      ])}
    >
      <input
        {...rest}
        ref={ref}
        accept={
          acceptedFileTypes.length === 0
            ? undefined
            : acceptedFileTypes.join(',')
        }
        class={styles.input}
        multiple={multiple}
        onBlur={handleBlur}
        onChange={handleChange}
        onDragEnd={handleDragEnd}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        title=""
        type="file"
      />
      <div class={styles.fill} />
      <div class={styles.border} />
      <div class={styles.children}>{children}</div>
    </div>
  )
})

function parseFileList(options: {
  fileList: FileList
  acceptedFileTypes: Array<string>
}): Array<File> {
  const { fileList, acceptedFileTypes } = options
  const result = Array.prototype.slice.call(fileList).sort(fileComparator)
  if (acceptedFileTypes.length === 0) {
    return result
  }
  return result.filter(function (file): boolean {
    return acceptedFileTypes.indexOf(file.type) !== -1
  })
}
