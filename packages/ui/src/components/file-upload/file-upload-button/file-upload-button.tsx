/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { Props } from '../../../types'
import { createClassName } from '../../../utilities/create-class-name'
import { LoadingIndicator } from '../../loading-indicator/loading-indicator'
import { fileComparator } from '../private/file-comparator'
import styles from './file-upload-button.css'

export type FileUploadButtonProps = {
  acceptedFileTypes?: Array<string>
  children: ComponentChildren
  disabled?: boolean
  fullWidth?: boolean
  loading?: boolean
  multiple?: boolean
  secondary?: boolean
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
  onSelectedFiles,
  secondary = false,
  propagateEscapeKeyDown = true,
  ...rest
}: Props<HTMLInputElement, FileUploadButtonProps>): JSX.Element {
  const handleChange = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>): void {
      if (typeof onSelectedFiles === 'undefined') {
        return
      }
      const files = Array.prototype.slice
        .call(event.currentTarget.files)
        .sort(fileComparator)
      onSelectedFiles(files)
    },
    [onSelectedFiles]
  )

  const handleClick = useCallback(function (
    event: JSX.TargetedMouseEvent<HTMLInputElement>
  ): void {
    event.currentTarget.focus()
  },
  [])

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
        styles.button,
        secondary === true ? styles.secondary : styles.primary,
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
        disabled={disabled === true}
        multiple={multiple}
        onChange={disabled === true ? undefined : handleChange}
        onClick={disabled === true ? undefined : handleClick}
        onKeyDown={disabled === true ? undefined : handleKeyDown}
        tabIndex={disabled === true ? -1 : 0}
        title=""
        type="file"
      />
      <button disabled={disabled === true} tabIndex={-1}>
        {children}
      </button>
    </div>
  )
}
