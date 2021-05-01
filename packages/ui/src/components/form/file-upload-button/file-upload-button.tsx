/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { Props } from '../../../types'
import { createClassName } from '../../../utilities/create-class-name'
import { LoadingIndicator } from '../../main/loading-indicator/loading-indicator'
import styles from './file-upload-button.css'

export type FileUploadButtonProps = {
  acceptedFileTypes?: Array<string>
  children: ComponentChildren
  disabled?: boolean
  fullWidth?: boolean
  loading?: boolean
  multiple?: boolean
  onClick?: JSX.MouseEventHandler<HTMLButtonElement>
  onSelectedFiles?: (files: Array<File>) => void
  propagateEscapeKeyDown?: boolean
}

export function FileUploadButton({
  acceptedFileTypes,
  children,
  disabled = false,
  fullWidth = false,
  loading = false,
  multiple = false,
  onClick,
  onSelectedFiles,
  propagateEscapeKeyDown = true,
  ...rest
}: Props<HTMLInputElement, FileUploadButtonProps>): JSX.Element {
  const handleChange = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>) {
      if (typeof onSelectedFiles === 'undefined') {
        return
      }
      const files = Array.prototype.slice
        .call(event.currentTarget.files)
        .sort(comparator)
      onSelectedFiles(files)
    },
    [onSelectedFiles]
  )

  const handleClick = useCallback(function (
    event: JSX.TargetedMouseEvent<HTMLInputElement>
  ) {
    event.currentTarget.focus()
  },
  [])

  const handleKeyDown = useCallback(
    function (event: JSX.TargetedKeyboardEvent<HTMLInputElement>) {
      if (event.key === 'Escape') {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        event.currentTarget.blur()
      }
    },
    [propagateEscapeKeyDown]
  )

  return (
    <div
      class={createClassName([
        styles.button,
        fullWidth === true ? styles.fullWidth : null,
        disabled === true ? styles.disabled : null,
        loading === true ? styles.loading : null
      ])}
    >
      {loading === true ? (
        <div class={styles.loadingIndicator}>
          <LoadingIndicator />
        </div>
      ) : null}
      <input
        {...rest}
        accept={
          typeof acceptedFileTypes === 'undefined'
            ? undefined
            : acceptedFileTypes.join(',')
        }
        class={styles.input}
        multiple={multiple}
        onChange={handleChange}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={disabled === true ? -1 : 0}
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
