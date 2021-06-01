/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { Props } from '../../types/types'
import { createClassName } from '../../utilities/create-class-name'
import { LoadingIndicator } from '../loading-indicator/loading-indicator'
import styles from './button.css'

export type ButtonProps = {
  children: ComponentChildren
  destructive?: boolean
  disabled?: boolean
  fullWidth?: boolean
  loading?: boolean
  onClick?: JSX.MouseEventHandler<HTMLButtonElement>
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
  const handleKeyDown = useCallback(
    function (event: JSX.TargetedKeyboardEvent<HTMLButtonElement>): void {
      if (event.key === 'Escape') {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        event.currentTarget.blur()
        return
      }
      if (event.key === 'Enter') {
        event.stopPropagation()
      }
    },
    [propagateEscapeKeyDown]
  )

  return (
    <div
      class={createClassName([
        styles.button,
        secondary === true ? styles.secondary : styles.primary,
        destructive === true ? styles.destructive : null,
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
      <button
        {...rest}
        disabled={disabled === true}
        onClick={disabled === true || loading === true ? undefined : onClick}
        onKeyDown={
          disabled === true || loading === true ? undefined : handleKeyDown
        }
        tabIndex={disabled === true ? -1 : 0}
      >
        {children}
      </button>
    </div>
  )
}
