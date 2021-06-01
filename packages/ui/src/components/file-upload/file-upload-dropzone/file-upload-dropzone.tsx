/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'
import { useCallback, useState } from 'preact/hooks'

import { Props } from '../../../types/types'
import { createClassName } from '../../../utilities/create-class-name'
import { fileComparator } from '../private/file-comparator'
import styles from './file-upload-dropzone.css'

export type FileUploadDropzoneProps = {
  acceptedFileTypes?: Array<string>
  children: ComponentChildren
  multiple?: boolean
  onSelectedFiles?: (files: Array<File>) => void
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
      const result = Array.prototype.slice.call(files).sort(fileComparator)
      if (typeof acceptedFileTypes === 'undefined') {
        return result
      }
      return result.filter(function (file): boolean {
        return acceptedFileTypes.indexOf(file.type) !== -1
      })
    },
    [acceptedFileTypes]
  )

  const handleBlur = useCallback(function (): void {
    setIsDropActive(false)
  }, [])

  const handleChange = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>): void {
      if (typeof onSelectedFiles === 'undefined') {
        return
      }
      const files = event.currentTarget.files as FileList
      onSelectedFiles(filterFiles(files))
    },
    [filterFiles, onSelectedFiles]
  )

  const handleDragEnter = useCallback(function (
    event: JSX.TargetedDragEvent<HTMLInputElement>
  ) {
    event.preventDefault()
  },
  [])

  const handleDragOver = useCallback(function (
    event: JSX.TargetedDragEvent<HTMLInputElement>
  ): void {
    event.preventDefault()
    setIsDropActive(true)
  },
  [])

  const handleDragEnd = useCallback(function (
    event: JSX.TargetedDragEvent<HTMLInputElement>
  ): void {
    event.preventDefault()
    setIsDropActive(false)
  },
  [])

  const handleDrop = useCallback(
    function (event: JSX.TargetedDragEvent<HTMLInputElement>): void {
      if (typeof onSelectedFiles === 'undefined') {
        return
      }
      event.preventDefault()
      if (event.dataTransfer === null) {
        throw new Error('`event.dataTransfer` is `null`')
      }
      const files = filterFiles(event.dataTransfer.files)
      onSelectedFiles(files)
      setIsDropActive(false)
    },
    [filterFiles, onSelectedFiles]
  )

  const handleKeyDown = useCallback(
    function (event: JSX.TargetedKeyboardEvent<HTMLInputElement>): void {
      if (event.key !== 'Escape') {
        return
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation()
      }
      event.currentTarget.blur()
    },
    [propagateEscapeKeyDown]
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
        accept={
          typeof acceptedFileTypes === 'undefined'
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
      <div class={styles.dashedLine} />
      <div class={styles.children}>{children}</div>
    </div>
  )
}
