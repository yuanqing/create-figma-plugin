import { Event, EventHandler } from '../../types/event-handler.js'

import { FocusableComponentProps } from '../../types/focusable-component-props.js'
import { LoadingIndicator } from '../loading-indicator/loading-indicator.js'
import { createClassName } from '../../utilities/create-class-name.js'
import { createComponent } from '../../utilities/create-component.js'
import { noop } from '../../utilities/no-op.js'
import styles from './button.module.css'
import { useCallback } from 'react'

export interface ButtonProps
  extends FocusableComponentProps<HTMLButtonElement> {
  children: JSX.Element
  danger?: boolean
  disabled?: boolean
  fullWidth?: boolean
  loading?: boolean
  onClick?: EventHandler.onClick<HTMLButtonElement>
  secondary?: boolean
}

export const Button = createComponent<HTMLButtonElement, ButtonProps>(function (
  {
    children,
    danger = false,
    disabled = false,
    fullWidth = false,
    loading = false,
    onClick = noop,
    onKeyDown = noop,
    propagateEscapeKeyDown = true,
    secondary = false,
    ...rest
  },
  ref
) {
  const handleKeyDown = useCallback(
    function (event: Event.onKeyDown<HTMLButtonElement>) {
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
        styles.button,
        secondary === true ? styles.secondary : styles.default,
        danger === true ? styles.danger : null,
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
        ref={ref}
        disabled={disabled === true}
        onClick={loading === true ? undefined : onClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <div class={styles.children}>{children}</div>
      </button>
    </div>
  )
})
