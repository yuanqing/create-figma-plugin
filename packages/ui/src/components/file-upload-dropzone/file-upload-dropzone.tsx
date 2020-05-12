/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useCallback, useState } from 'preact/hooks'
import { ESCAPE_KEY_CODE } from '../../utilities/key-codes'
import '../../scss/base.scss'
import styles from './file-upload-dropzone.scss'

export interface FileUploadDropzoneProps {
  acceptedFileTypes?: string[],
  children: React.ReactNode,
  multiple?: boolean,
  onClick?: (event) => void, // FIXME
  onSelectedFiles: (files, event) => void, // FIXME
  propagateEscapeKeyDown?: boolean,
}

export function FileUploadDropzone ({
  acceptedFileTypes,
  children,
  multiple,
  onClick,
  onSelectedFiles,
  propagateEscapeKeyDown = true,
  ...rest
} : FileUploadDropzoneProps) {
  const [isDropActive, setIsDropActive] = useState(false)
  const filterFiles = useCallback(
    function (files) {
      const result = Array.prototype.slice.call(files).sort(sortComparator)
      if (typeof acceptedFileTypes === 'undefined') {
        return result
      }
      return result.filter(function (file) {
        return acceptedFileTypes.indexOf(file.type) !== -1
      })
    },
    [acceptedFileTypes]
  )
  const handleBlur = useCallback(function () {
    setIsDropActive(false)
  }, [])
  const handleChange = useCallback(
    function (event) {
      const files = filterFiles(event.target.files)
      onSelectedFiles(files, event)
    },
    [filterFiles, onSelectedFiles]
  )
  const handleDragEnter = useCallback(function (event) {
    event.preventDefault()
  }, [])
  const handleDragOver = useCallback(function (event) {
    event.preventDefault()
    setIsDropActive(true)
  }, [])
  const handleDragEnd = useCallback(function (event) {
    event.preventDefault()
    setIsDropActive(false)
  }, [])
  const handleDrop = useCallback(
    function (event) {
      event.preventDefault()
      const files = filterFiles(event.dataTransfer.files)
      onSelectedFiles(files, event)
      setIsDropActive(false)
    },
    [filterFiles, onSelectedFiles]
  )
  const handleKeyDown = useCallback(
    function (event) {
      const keyCode = event.keyCode
      if (keyCode === ESCAPE_KEY_CODE) {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        event.target.blur()
      }
    },
    [propagateEscapeKeyDown]
  )
  const accept =
    typeof acceptedFileTypes !== 'undefined'
      ? acceptedFileTypes.join(',')
      : null
  return (
    <div
      class={classnames(
        styles.fileUploadDropzone,
        isDropActive === true ? styles.isDropActive : null
      )}
    >
      <input
        {...rest}
        class={styles.input}
        type='file'
        accept={accept}
        multiple={multiple}
        onBlur={handleBlur}
        onChange={handleChange}
        onDragEnter={handleDragEnter}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onKeyDown={handleKeyDown}
        tabIndex={-1}
        title=''
      />
      <div class={styles.dashedLine} />
      <div class={styles.children}>{children}</div>
    </div>
  )
}

function sortComparator (a, b) {
  const aName = a.name.toLowerCase()
  const bName = b.name.toLowerCase()
  if (aName !== bName) {
    return aName.localeCompare(bName, { numeric: true })
  }
  return a.lastModified - b.lastModified
}
