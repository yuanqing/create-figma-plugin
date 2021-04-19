/** @jsx h */
import classnames from '@sindresorhus/class-names'
import type { ComponentChildren, JSX } from 'preact'
import { h } from 'preact'
import { useCallback } from 'preact/hooks'

import type { Props } from '../../../types'
import { ENTER_KEY_CODE, ESCAPE_KEY_CODE } from '../../../utilities/key-codes'
import { LoadingIndicator } from '../../main/loading-indicator/loading-indicator'
import styles from './button.css'

export interface ButtonProps {
  children: ComponentChildren
  destructive?: boolean
  disabled?: boolean
  fullWidth?: boolean
  loading?: boolean
  onClick: JSX.MouseEventHandler<HTMLButtonElement>
  propagateEscapeKeyDown?: boolean
  secondary?: boolean
}

export function Button({
  children,
  destructive = false,
  disabled = false,
  fullWidth = false,
  loading = false,
  onClick,
  propagateEscapeKeyDown = true,
  secondary = false,
  ...rest
}: Props<HTMLButtonElement, ButtonProps>): JSX.Element {
  const handleKeyDown: JSX.KeyboardEventHandler<HTMLButtonElement> = useCallback(
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
        disabled={disabled === true}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        tabIndex={disabled === true ? -1 : undefined}
      >
        {children}
      </button>
    </div>
  )
}
