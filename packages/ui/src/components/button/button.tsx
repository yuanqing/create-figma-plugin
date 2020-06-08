/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useCallback } from 'preact/hooks'

import { ENTER_KEY_CODE, ESCAPE_KEY_CODE } from '../../utilities/key-codes'
import { LoadingIndicator } from '../loading-indicator/loading-indicator'
import styles from './button.scss'

export interface ButtonProps {
  children: preact.ComponentChildren
  destructive?: boolean
  disabled?: boolean
  focused?: boolean
  fullWidth?: boolean
  loading?: boolean
  onClick: EventListener
  propagateEscapeKeyDown?: boolean
  secondary?: boolean
}

export function Button({
  children,
  destructive,
  disabled,
  focused,
  fullWidth,
  loading,
  onClick,
  propagateEscapeKeyDown = true,
  secondary,
  ...rest
}: ButtonProps): h.JSX.Element {
  const handleKeyDown = useCallback(
    function (event: KeyboardEvent) {
      const keyCode = event.keyCode
      if (keyCode === ESCAPE_KEY_CODE) {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        ;(event.target as HTMLElement).blur()
      }
      if (keyCode === ENTER_KEY_CODE) {
        event.stopPropagation()
      }
    },
    [propagateEscapeKeyDown]
  )
  return (
    <div
      class={classnames(
        styles.button,
        secondary === true ? styles.secondary : styles.primary,
        destructive === true ? styles.destructive : null,
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
      <button
        {...rest}
        data-initial-focus={focused === true}
        disabled={disabled === true}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        tabIndex={disabled === true ? undefined : 0}
      >
        {children}
      </button>
    </div>
  )
}
