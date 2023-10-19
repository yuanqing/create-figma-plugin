import { ComponentChildren, h } from 'preact'
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
      children,
      disabled = false,
      onClick,
      onKeyDown = noop,
      propagateEscapeKeyDown = true,
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
      <button
        {...rest}
        ref={ref}
        class={styles.iconButton}
        disabled={disabled === true}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <div class={styles.icon}>{children}</div>
      </button>
    )
  }
)
