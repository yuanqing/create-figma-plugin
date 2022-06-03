/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { Props } from '../../../types/types'
import { createClassName } from '../../../utilities/create-class-name'
import buttonStyles from '../../button/button.css'
import { LoadingIndicator } from '../../loading-indicator/loading-indicator'
import { fileComparator } from '../private/file-comparator'
import fileUploadButtonStyles from './file-upload-button.css'

export type FileUploadButtonProps = {
  acceptedFileTypes?: Array<string>
  children: ComponentChildren
  disabled?: boolean
  fullWidth?: boolean
  loading?: boolean
  multiple?: boolean
  onSelectedFiles?: (files: Array<File>) => void
  propagateEscapeKeyDown?: boolean
  secondary?: boolean
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

  const handleClick = useCallback(
    function (event: JSX.TargetedMouseEvent<HTMLInputElement>): void {
      if (disabled === true || loading === true) {
        event.preventDefault()
        return
      }
      event.currentTarget.focus()
    },
    [disabled, loading]
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

  const handleLoadingMouseDown = useCallback(function (
    event: JSX.TargetedMouseEvent<HTMLInputElement>
  ): void {
    // This is needed so that the `loading` state behaviour will be identical
    // to the `Button` component ie. clicking the button will focus it.
    event.preventDefault()
    event.currentTarget.focus()
  },
  [])

  return (
    <div
      class={createClassName([
        buttonStyles.button,
        secondary === true ? buttonStyles.secondary : buttonStyles.default,
        secondary === true
          ? fileUploadButtonStyles.secondary
          : fileUploadButtonStyles.default,
        fullWidth === true ? buttonStyles.fullWidth : null,
        disabled === true ? buttonStyles.disabled : null,
        disabled === true ? fileUploadButtonStyles.disabled : null,
        loading === true ? buttonStyles.loading : null
      ])}
    >
      {loading === true ? (
        <div class={buttonStyles.loadingIndicator}>
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
        class={fileUploadButtonStyles.input}
        disabled={disabled === true}
        multiple={multiple}
        onChange={
          disabled === true || loading === true ? undefined : handleChange
        }
        onClick={handleClick}
        onKeyDown={
          disabled === true || loading === true ? undefined : handleKeyDown
        }
        onMouseDown={loading === true ? handleLoadingMouseDown : undefined}
        tabIndex={disabled === true ? -1 : 0}
        title=""
        type="file"
      />
      <button disabled={disabled === true} tabIndex={-1}>
        <div class={buttonStyles.children}>{children}</div>
      </button>
    </div>
  )
}
