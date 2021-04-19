/** @jsx h */
import classnames from '@sindresorhus/class-names'
import type { ComponentChildren, JSX } from 'preact'
import { h } from 'preact'
import { useCallback, useState } from 'preact/hooks'

import type { OnSelectedFiles, Props } from '../../../types'
import { ESCAPE_KEY_CODE } from '../../../utilities/key-codes'
import styles from './file-upload-dropzone.css'

export interface FileUploadDropzoneProps {
  acceptedFileTypes?: Array<string>
  children: ComponentChildren
  multiple?: boolean
  onSelectedFiles: OnSelectedFiles
  propagateEscapeKeyDown?: boolean
}

export function FileUploadDropzone({
  acceptedFileTypes,
  children,
  multiple = false,
  onSelectedFiles,
  propagateEscapeKeyDown = true,
  ...rest
}: Props<HTMLInputElement, FileUploadDropzoneProps>): JSX.Element {
  const [isDropActive, setIsDropActive] = useState(false)

  const filterFiles = useCallback(
    function (files: FileList): Array<File> {
      const result = Array.prototype.slice.call(files).sort(comparator)
      if (typeof acceptedFileTypes === 'undefined') {
        return result
      }
      return result.filter(function (file) {
        return acceptedFileTypes.indexOf(file.type) !== -1
      })
    },
    [acceptedFileTypes]
  )

  const handleBlur: JSX.FocusEventHandler<HTMLInputElement> = useCallback(
    function () {
      setIsDropActive(false)
    },
    []
  )

  const handleChange: JSX.GenericEventHandler<HTMLInputElement> = useCallback(
    function (event: Event) {
      const files = (event.target as HTMLInputElement).files
      if (files === null) {
        return
      }
      onSelectedFiles(filterFiles(files), event)
    },
    [filterFiles, onSelectedFiles]
  )

  const handleDragEnter: JSX.DragEventHandler<HTMLInputElement> = useCallback(
    function (event: DragEvent) {
      event.preventDefault()
    },
    []
  )

  const handleDragOver: JSX.DragEventHandler<HTMLInputElement> = useCallback(
    function (event: DragEvent) {
      event.preventDefault()
      setIsDropActive(true)
    },
    []
  )

  const handleDragEnd: JSX.DragEventHandler<HTMLInputElement> = useCallback(
    function (event: DragEvent) {
      event.preventDefault()
      setIsDropActive(false)
    },
    []
  )

  const handleDrop: JSX.DragEventHandler<HTMLInputElement> = useCallback(
    function (event: DragEvent) {
      event.preventDefault()
      if (event.dataTransfer === null) {
        return
      }
      const files = filterFiles(event.dataTransfer.files)
      onSelectedFiles(files, event)
      setIsDropActive(false)
    },
    [filterFiles, onSelectedFiles]
  )

  const handleKeyDown: JSX.KeyboardEventHandler<HTMLInputElement> = useCallback(
    function (event: KeyboardEvent) {
      const keyCode = event.keyCode
      if (keyCode === ESCAPE_KEY_CODE) {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        ;(event.target as HTMLElement).blur()
      }
    },
    [propagateEscapeKeyDown]
  )

  return (
    <div
      class={classnames(
        styles.fileUploadDropzone,
        isDropActive === true ? styles.isDropActive : null
      )}
    >
      <input
        {...rest}
        accept={
          typeof acceptedFileTypes !== 'undefined'
            ? acceptedFileTypes.join(',')
            : undefined
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
        tabIndex={-1}
        title=""
        type="file"
      />
      <div class={styles.dashedLine} />
      <div class={styles.children}>{children}</div>
    </div>
  )
}

function comparator(a: File, b: File) {
  const aName = a.name.toLowerCase()
  const bName = b.name.toLowerCase()
  if (aName !== bName) {
    return aName.localeCompare(bName)
  }
  return a.lastModified - b.lastModified
}
