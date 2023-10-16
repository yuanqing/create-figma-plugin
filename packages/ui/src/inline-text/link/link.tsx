import { ComponentChildren, h } from 'preact'
import { useCallback } from 'preact/hooks'

import { Event } from '../../types/event-handler.js'
import { FocusableComponentProps } from '../../types/focusable-component-props.js'
import { createClassName } from '../../utilities/create-class-name.js'
import { createComponent } from '../../utilities/create-component.js'
import { noop } from '../../utilities/no-op.js'
import styles from './link.module.css'

export interface LinkProps extends FocusableComponentProps<HTMLAnchorElement> {
  children: ComponentChildren
  fullWidth?: boolean
  href: string
  target?: string
}

export const Link = createComponent<HTMLAnchorElement, LinkProps>(function (
  {
    children,
    fullWidth = false,
    href,
    onKeyDown = noop,
    propagateEscapeKeyDown = true,
    target,
    ...rest
  },
  ref
) {
  const handleKeyDown = useCallback(
    function (event: Event.onKeyDown<HTMLAnchorElement>) {
      onKeyDown(event)
      if (event.key === 'Escape') {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        event.currentTarget.blur()
      }
    },
    [propagateEscapeKeyDown, onKeyDown]
  )

  return (
    <a
      {...rest}
      ref={ref}
      class={createClassName([
        styles.link,
        fullWidth === true ? styles.fullWidth : null
      ])}
      href={href}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      target={target}
    >
      {children}
    </a>
  )
})
