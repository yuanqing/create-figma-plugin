import { ComponentChildren, h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { Props } from '../../types/types.js'
import styles from './icon-button.module.css'

export type IconButtonProps = {
  children: ComponentChildren
  disabled?: boolean
  onClick?: JSX.MouseEventHandler<HTMLButtonElement>
  propagateEscapeKeyDown?: boolean
}

export function IconButton({
  children,
  disabled = false,
  onClick,
  propagateEscapeKeyDown = true,
  ...rest
}: Props<HTMLButtonElement, IconButtonProps>): JSX.Element {
  const handleKeyDown = useCallback(
    function (event: JSX.TargetedKeyboardEvent<HTMLButtonElement>): void {
      if (event.key !== 'Escape') {
        return
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation()
      }
      event.currentTarget.blur()
    },
    [propagateEscapeKeyDown]
  )

  return (
    <button
      {...rest}
      class={styles.iconButton}
      disabled={disabled === true}
      onClick={disabled === true ? undefined : onClick}
      onKeyDown={disabled === true ? undefined : handleKeyDown}
      tabIndex={disabled === true ? -1 : 0}
    >
      <div class={styles.icon}>{children}</div>
    </button>
  )
}
