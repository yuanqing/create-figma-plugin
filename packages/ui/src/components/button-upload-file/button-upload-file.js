/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useCallback } from 'preact/hooks'
import { LoadingIndicator } from '../loading-indicator/loading-indicator'
import { ESCAPE_KEY_CODE } from '../../utilities/key-codes'
import '../../scss/base.scss'
import styles from './button-upload-file.scss'

export function ButtonUploadFile ({
  accept,
  children,
  disabled: isDisabled,
  fullWidth: isFullWidth,
  loading: isLoading,
  multiple,
  onClick,
  onSelectedFiles,
  propagateEscapeKeyDown = true,
  ...rest
}) {
  const handleFiles = useCallback(
    function (event) {
      const files = Array.prototype.slice
        .call(event.target.files)
        .sort(function (a, b) {
          if (a.name !== b.name) {
            return a.name.localeCompare(b.name, { numeric: true })
          }
          if (a.type !== b.type) {
            return a.type.localeCompare(b.type, { numeric: true })
          }
          return a.lastModified - b.lastModified
        })
      onSelectedFiles(files, event)
    },
    [onSelectedFiles]
  )
  const handleClick = useCallback(function (event) {
    event.target.focus()
  }, [])
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
        onChange={handleFiles}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex='0'
      />
      <button disabled={isDisabled === true} onClick={onClick} tabIndex='-1'>
        {children}
      </button>
    </div>
  )
}
