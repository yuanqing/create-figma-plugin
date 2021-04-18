/** @jsx h */
import classnames from '@sindresorhus/class-names'
import type { ComponentChildren, JSX } from 'preact'
import { h } from 'preact'
import { useCallback, useState } from 'preact/hooks'

import type { OnSelectedFiles, Props } from '../../types'
import { ESCAPE_KEY_CODE } from '../../utilities/key-codes'
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
  multiple,
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
  const handleBlur = useCallback(function (): void {
    setIsDropActive(false)
  }, [])
  const handleChange = useCallback(
    function (event: Event): void {
      const files = (event.target as HTMLInputElement).files
      if (files === null) {
        return
      }
      onSelectedFiles(filterFiles(files), event)
    },
    [filterFiles, onSelectedFiles]
  )
  const handleDragEnter = useCallback(function (event: DragEvent): void {
    event.preventDefault()
  }, [])
  const handleDragOver = useCallback(function (event: DragEvent): void {
    event.preventDefault()
    setIsDropActive(true)
  }, [])
  const handleDragEnd = useCallback(function (event: DragEvent): void {
    event.preventDefault()
    setIsDropActive(false)
  }, [])
  const handleDrop = useCallback(
    function (event: DragEvent): void {
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
  const handleKeyDown = useCallback(
    function (event: KeyboardEvent): void {
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
  const accept =
    typeof acceptedFileTypes !== 'undefined'
      ? acceptedFileTypes.join(',')
      : undefined
  return (
    <div
      class={classnames(
        styles.fileUploadDropzone,
        isDropActive === true ? styles.isDropActive : null
      )}
    >
      <input
        {...rest}
        accept={accept}
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
