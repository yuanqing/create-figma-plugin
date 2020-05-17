/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useCallback } from 'preact/hooks'
import { LoadingIndicator } from '../loading-indicator/loading-indicator'
import { ENTER_KEY_CODE, ESCAPE_KEY_CODE } from '../../utilities/key-codes'
import styles from './button.scss'

export interface ButtonProps {
  children: preact.ComponentChildren,
  destructive?: boolean,
  disabled?: boolean,
  focused?: boolean,
  fullWidth?: boolean,
  loading?: boolean,
  onClick: EventListener,
  propagateEscapeKeyDown?: boolean,
  secondary?: boolean
}

export function Button ({
  children,
  destructive: isDestructive,
  disabled: isDisabled,
  focused: isFocused,
  fullWidth: isFullWidth,
  loading: isLoading,
  onClick,
  propagateEscapeKeyDown = true,
  secondary: isSecondary,
  ...rest
} : ButtonProps) : h.JSX.Element {
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
        isSecondary === true ? styles.isSecondary : styles.isPrimary,
        isDestructive === true ? styles.isDestructive : null,
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
      <button
        {...rest}
        disabled={isDisabled === true}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        tabIndex={isDisabled === true ? undefined : 0}
        data-initial-focus={isFocused === true}
      >{children}</button>
    </div>
  )
}
