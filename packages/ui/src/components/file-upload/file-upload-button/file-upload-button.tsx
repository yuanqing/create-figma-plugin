import { ComponentChildren, h } from 'preact'
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
  onMouseDown?: EventHandler.onMouseDown<HTMLInputElement>
  onSelectedFiles?: EventHandler.onSelectedFiles
  secondary?: boolean
}

export const FileUploadButton = createComponent<
  HTMLInputElement,
  FileUploadButtonProps
>(function (
  {
    acceptedFileTypes = [],
    children,
    disabled = false,
    fullWidth = false,
    loading = false,
    multiple = false,
    onChange = noop,
    onClick = noop,
    onKeyDown = noop,
    onMouseDown = noop,
    onSelectedFiles = noop,
    propagateEscapeKeyDown = true,
    secondary = false,
    ...rest
  },
  ref
) {
  const handleChange = useCallback(
    function (event: Event.onChange<HTMLInputElement>) {
      onChange(event)
      const fileList = event.currentTarget.files
      if (fileList === null) {
        throw new Error('`event.currentTarget.files` is `null`')
      }
      const files = parseFileList(fileList)
      if (files.length > 0) {
        onSelectedFiles(files)
      }
    },
    [onChange, onSelectedFiles]
  )

  const handleClick = useCallback(
    function (event: Event.onClick<HTMLInputElement>) {
      onClick(event)
      if (loading === true) {
        event.preventDefault()
      }
    },
    [onClick, loading]
  )

  const handleMouseDown = useCallback(
    function (event: Event.onClick<HTMLInputElement>) {
      onMouseDown(event)
      event.currentTarget.focus()
    },
    [onMouseDown]
  )

  const handleKeyDown = useCallback(
    function (event: Event.onKeyDown<HTMLInputElement>) {
      onKeyDown(event)
      if (event.key === 'Escape') {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        event.currentTarget.blur()
      }
    },
    [onKeyDown, propagateEscapeKeyDown]
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
        onMouseDown={handleMouseDown}
        tabIndex={0}
        title=""
        type="file"
      />
      <button disabled={disabled === true} tabIndex={-1}>
        <div class={buttonStyles.children}>{children}</div>
      </button>
      {loading === true ? (
        <div class={buttonStyles.loadingIndicator}>
          <LoadingIndicator />
        </div>
      ) : null}
    </div>
  )
})

function parseFileList(fileList: FileList): Array<File> {
  return Array.prototype.slice.call(fileList).sort(fileComparator)
}
