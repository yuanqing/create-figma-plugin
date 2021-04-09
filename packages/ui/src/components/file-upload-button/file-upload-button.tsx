/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useCallback } from 'preact/hooks'

import { HTMLProps, OnSelectedFiles } from '../../types'
import { ESCAPE_KEY_CODE } from '../../utilities/key-codes'
import { LoadingIndicator } from '../loading-indicator/loading-indicator'
import styles from './file-upload-button.css'

export interface FileUploadButtonProps {
  acceptedFileTypes?: string[]
  children: preact.ComponentChildren
  disabled?: boolean
  focused?: boolean
  fullWidth?: boolean
  loading?: boolean
  multiple?: boolean
  onClick?: EventListener
  onSelectedFiles: OnSelectedFiles
  propagateEscapeKeyDown?: boolean
}

export function FileUploadButton({
  acceptedFileTypes,
  children,
  disabled,
  focused,
  fullWidth,
  loading,
  multiple,
  onClick,
  onSelectedFiles,
  propagateEscapeKeyDown = true,
  ...rest
}: HTMLProps<FileUploadButtonProps, HTMLInputElement>): h.JSX.Element {
  const handleClick = useCallback(function (event: MouseEvent) {
    ;(event.target as HTMLElement).focus()
  }, [])
  const handleChange = useCallback(
    function (event: Event): void {
      const files = Array.prototype.slice
        .call((event.target as HTMLInputElement).files)
        .sort(comparator)
      onSelectedFiles(files, event)
    },
    [onSelectedFiles]
  )
  const handleKeyDown = useCallback(
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
  const accept =
    typeof acceptedFileTypes !== 'undefined'
      ? acceptedFileTypes.join(',')
      : undefined
  return (
    <div
      class={classnames(
        styles.button,
        fullWidth === true ? styles.fullWidth : null,
        disabled === true ? styles.disabled : null,
        loading === true ? styles.loading : null
      )}
    >
      {loading === true ? (
        <div class={styles.loadingIndicator}>
          <LoadingIndicator />
        </div>
      ) : null}
      <input
        {...rest}
        accept={accept}
        class={styles.input}
        data-initial-focus={focused === true}
        multiple={multiple}
        onChange={handleChange}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={disabled === true ? undefined : 0}
        title=""
        type="file"
      />
      <button disabled={disabled === true} onClick={onClick} tabIndex={-1}>
        {children}
      </button>
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
