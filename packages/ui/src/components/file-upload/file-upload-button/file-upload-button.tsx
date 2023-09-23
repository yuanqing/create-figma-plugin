import { ComponentChildren, h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { Event, EventHandler } from '../../../types/event-handler.js'
import { FocusableComponentProps } from '../../../types/focusable-component-props.js'
import { createClassName } from '../../../utilities/create-class-name.js'
import { createComponent } from '../../../utilities/create-component.js'
import { noop } from '../../../utilities/no-op.js'
import buttonStyles from '../../button/button.module.css'
import { LoadingIndicator } from '../../loading-indicator/loading-indicator.js'
import { fileComparator } from '../private/file-comparator.js'
import fileUploadButtonStyles from './file-upload-button.module.css'

export interface FileUploadButtonProps
  extends FocusableComponentProps<HTMLInputElement> {
  acceptedFileTypes?: Array<string>
  children: ComponentChildren
  disabled?: boolean
  fullWidth?: boolean
  loading?: boolean
  multiple?: boolean
  onChange?: EventHandler.onChange<HTMLInputElement>
  onClick?: EventHandler.onClick<HTMLInputElement>
  onSelectedFiles?: EventHandler.onSelectedFiles
  secondary?: boolean
}

export const FileUploadButton = createComponent<
  HTMLInputElement,
  FileUploadButtonProps
>(function (
  {
    acceptedFileTypes = [],
    blurOnEscapeKeyDown = true,
    children,
    disabled = false,
    fullWidth = false,
    loading = false,
    multiple = false,
    onChange = noop,
    onClick = noop,
    onSelectedFiles = noop,
    onKeyDown = noop,
    propagateEscapeKeyDown = true,
    secondary = false,
    ...rest
  },
  ref
): JSX.Element {
  const handleChange = useCallback(
    function (event: Event.onChange<HTMLInputElement>): void {
      onChange(event)
      if (disabled === true || loading === true) {
        return
      }
      const files = Array.prototype.slice
        .call(event.currentTarget.files)
        .sort(fileComparator)
      onSelectedFiles(files)
    },
    [disabled, loading, onChange, onSelectedFiles]
  )

  const handleClick = useCallback(
    function (event: Event.onClick<HTMLInputElement>): void {
      onClick(event)
      if (disabled === true || loading === true) {
        return
      }
      event.currentTarget.focus()
    },
    [disabled, loading, onClick]
  )

  const handleKeyDown = useCallback(
    function (event: Event.onKeyDown<HTMLInputElement>): void {
      onKeyDown(event)
      if (event.key !== 'Escape') {
        return
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation()
      }
      if (blurOnEscapeKeyDown === true) {
        event.currentTarget.blur()
      }
    },
    [blurOnEscapeKeyDown, onKeyDown, propagateEscapeKeyDown]
  )

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
        ref={ref}
        accept={
          acceptedFileTypes.length === 0
            ? undefined
            : acceptedFileTypes.join(',')
        }
        class={fileUploadButtonStyles.input}
        disabled={disabled === true}
        multiple={multiple}
        onChange={handleChange}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        title=""
        type="file"
      />
      <button disabled={disabled === true} tabIndex={-1}>
        <div class={buttonStyles.children}>{children}</div>
      </button>
    </div>
  )
})
