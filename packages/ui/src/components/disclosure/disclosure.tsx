import { ComponentChildren, Fragment, h } from 'preact'
import { useCallback } from 'preact/hooks'

import { IconCaretRight16 } from '../../icons/icon-16/icon-caret-right-16.js'
import { Event, EventHandler } from '../../types/event-handler.js'
import { FocusableComponentProps } from '../../types/focusable-component-props.js'
import { createComponent } from '../../utilities/create-component.js'
import { noop } from '../../utilities/no-op.js'
import styles from './disclosure.module.css'

export interface DisclosureProps
  extends FocusableComponentProps<HTMLInputElement> {
  children: ComponentChildren
  onClick?: EventHandler.onClick<HTMLInputElement>
  open: boolean
  title: string
}

export const Disclosure = createComponent<HTMLInputElement, DisclosureProps>(
  function (
    {
      children,
      onClick = noop,
      onKeyDown = noop,
      open,
      propagateEscapeKeyDown = true,
      title,
      ...rest
    },
    ref
  ) {
    const handleKeyDown = useCallback(
      function (event: Event.onKeyDown<HTMLInputElement>) {
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
      <Fragment>
        <label class={styles.label}>
          <input
            {...rest}
            ref={ref}
            checked={open === true}
            class={styles.input}
            onClick={onClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            type="checkbox"
          />
          <div class={styles.title}>
            <div class={styles.icon}>
              <IconCaretRight16 />
            </div>
            {title}
          </div>
        </label>
        {open === true ? <div class={styles.children}>{children}</div> : null}
      </Fragment>
    )
  }
)
