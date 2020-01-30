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
  focused: isFocused,
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
        .sort(sortComparator)
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
        title=''
        data-initial-focus={isFocused === true}
      />
      <button disabled={isDisabled === true} onClick={onClick} tabIndex='-1'>
        {children}
      </button>
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
