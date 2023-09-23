import { ComponentChildren, h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { Event, EventHandler } from '../../types/event-handler.js'
import { FocusableComponentProps } from '../../types/focusable-component-props.js'
import { createComponent } from '../../utilities/create-component.js'
import { noop } from '../../utilities/no-op.js'
import styles from './icon-button.module.css'

export interface IconButtonProps
  extends FocusableComponentProps<HTMLButtonElement> {
  children: ComponentChildren
  disabled?: boolean
  onClick?: EventHandler.onClick<HTMLButtonElement>
}

export const IconButton = createComponent<HTMLButtonElement, IconButtonProps>(
  function (
    {
      blurOnEscapeKeyDown = true,
      children,
      disabled = false,
      onClick,
      onKeyDown = noop,
      propagateEscapeKeyDown = true,
      ...rest
    },
    ref
  ): JSX.Element {
    const handleKeyDown = useCallback(
      function (event: Event.onKeyDown<HTMLButtonElement>): void {
        onKeyDown(event)
        if (event.key !== 'Escape') {
          return
        }
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        if (blurOnEscapeKeyDown === true) {
          event.currentTarget.blur()
        }
      },
      [blurOnEscapeKeyDown, onKeyDown, propagateEscapeKeyDown]
    )

    return (
      <button
        {...rest}
        ref={ref}
        class={styles.iconButton}
        disabled={disabled === true}
        onClick={disabled === true ? undefined : onClick}
        onKeyDown={disabled === true ? undefined : handleKeyDown}
        tabIndex={0}
      >
        <div class={styles.icon}>{children}</div>
      </button>
    )
  }
)
