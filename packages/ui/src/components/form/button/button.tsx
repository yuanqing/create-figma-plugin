/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { ComponentChildren, h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { Props } from '../../../types'
import { LoadingIndicator } from '../../main/loading-indicator/loading-indicator'
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
    function (event: JSX.TargetedKeyboardEvent<HTMLButtonElement>) {
      if (event.key === 'Escape') {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        event.currentTarget.blur()
      }
      if (event.key === 'Enter') {
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
        tabIndex={disabled === true ? -1 : 0}
      >
        {children}
      </button>
    </div>
  )
}
