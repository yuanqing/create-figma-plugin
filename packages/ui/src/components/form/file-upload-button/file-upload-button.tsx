/** @jsx h */
import classnames from '@sindresorhus/class-names'
import type { ComponentChildren, JSX } from 'preact'
import { h } from 'preact'
import { useCallback } from 'preact/hooks'

import type { OnSelectedFiles, Props } from '../../../types'
import { ESCAPE_KEY_CODE } from '../../../utilities/key-codes'
import { LoadingIndicator } from '../../main/loading-indicator/loading-indicator'
import styles from './file-upload-button.css'

export interface FileUploadButtonProps {
  acceptedFileTypes?: Array<string>
  children: ComponentChildren
  disabled?: boolean
  fullWidth?: boolean
  loading?: boolean
  multiple?: boolean
  onClick?: JSX.MouseEventHandler<HTMLButtonElement>
  onSelectedFiles: OnSelectedFiles
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
  const handleChange: JSX.GenericEventHandler<HTMLInputElement> = useCallback(
    function (event: Event) {
      const files = Array.prototype.slice
        .call((event.target as HTMLInputElement).files)
        .sort(comparator)
      onSelectedFiles(files, event)
    },
    [onSelectedFiles]
  )

  const handleClick: JSX.MouseEventHandler<HTMLInputElement> = useCallback(
    function (event: MouseEvent) {
      ;(event.target as HTMLElement).focus()
    },
    []
  )

  const handleKeyDown: JSX.KeyboardEventHandler<HTMLInputElement> = useCallback(
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
