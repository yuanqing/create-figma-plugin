/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useCallback } from 'preact/hooks'
import { OnSelectedFiles } from '../../types'
import { LoadingIndicator } from '../loading-indicator/loading-indicator'
import { ESCAPE_KEY_CODE } from '../../utilities/key-codes'
import styles from './file-upload-button.scss'

export interface FileUploadButtonProps {
  acceptedFileTypes?: string[],
  children: preact.ComponentChildren,
  disabled?: boolean,
  focused?: boolean,
  fullWidth?: boolean,
  loading?: boolean,
  multiple?: boolean,
  onClick?: EventListener,
  onSelectedFiles: OnSelectedFiles,
  propagateEscapeKeyDown?: boolean,
}

export function FileUploadButton ({
  acceptedFileTypes,
  children,
  disabled: isDisabled,
  focused: isFocused,
  fullWidth: isFullWidth,
  loading: isLoading,
  multiple,
  onClick,
  onSelectedFiles,
  propagateEscapeKeyDown = true,
  ...rest
} : FileUploadButtonProps) : h.JSX.Element {
  const handleClick = useCallback(function (event: MouseEvent) {
    (event.target as HTMLElement).focus()
  }, [])
  const handleChange = useCallback(
    function (event: Event) : void {
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
        (event.target as HTMLElement).blur()
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
        isFullWidth === true ? styles.isFullWidth : null,
        isDisabled === true ? styles.isDisabled : null,
        isLoading === true ? styles.isLoading : null
      )}
    >
      {isLoading === true ? (
        <div class={styles.loadingIndicator}>
          <LoadingIndicator />
        </div>
      ) : null}
      <input
        {...rest}
        class={styles.input}
        type='file'
        accept={accept}
        multiple={multiple}
        onChange={handleChange}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={isDisabled === true ? undefined : 0}
        title=''
        data-initial-focus={isFocused === true}
      />
      <button disabled={isDisabled === true} onClick={onClick} tabIndex={-1}>
        {children}
      </button>
    </div>
  )
}

function comparator (a: File, b: File) {
  const aName = a.name.toLowerCase()
  const bName = b.name.toLowerCase()
  if (aName !== bName) {
    return aName.localeCompare(bName)
  }
  return a.lastModified - b.lastModified
}
