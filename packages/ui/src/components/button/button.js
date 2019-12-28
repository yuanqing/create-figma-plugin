/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useCallback } from 'preact/hooks'
import { ESCAPE_KEY_CODE } from '../../utilities/key-codes'
import '../../scss/base.scss'
import styles from './button.scss'

export function Button ({
  destructive: isDestructive,
  disabled: isDisabled,
  fullWidth: isFullWidth,
  onClick,
  propagateEscapeKeyDown = true,
  secondary: isSecondary,
  ...rest
}) {
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
    <button
      {...rest}
      class={classnames(
        styles.button,
        isSecondary === true ? styles.isSecondary : null,
        isDestructive === true ? styles.isDestructive : null,
        isFullWidth === true ? styles.isFullWidth : null
      )}
      disabled={isDisabled === true}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex='0'
    />
  )
}
