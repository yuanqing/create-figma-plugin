import { ComponentChildren, h } from 'preact'
import { useCallback } from 'preact/hooks'

import { Event, EventHandler } from '../../types/event-handler.js'
import { FocusableComponentProps } from '../../types/focusable-component-props.js'
import { createClassName } from '../../utilities/create-class-name.js'
import { createComponent } from '../../utilities/create-component.js'
import { noop } from '../../utilities/no-op.js'
import styles from './layer.module.css'

export interface LayerProps extends FocusableComponentProps<HTMLInputElement> {
  bold?: boolean
  children: ComponentChildren
  component?: boolean
  description?: string
  icon: ComponentChildren
  onChange?: EventHandler.onChange<HTMLInputElement>
  onValueChange?: EventHandler.onValueChange<boolean>
  value: boolean
}

export const Layer = createComponent<HTMLInputElement, LayerProps>(function (
  {
    bold = false,
    children,
    component = false,
    description,
    icon,
    onChange = noop,
    onKeyDown = noop,
    onValueChange = noop,
    propagateEscapeKeyDown = true,
    value,
    ...rest
  },
  ref
) {
  const handleChange = useCallback(
    function (event: Event.onChange<HTMLInputElement>) {
      onChange(event)
      const newValue = event.currentTarget.checked === true
      onValueChange(newValue)
    },
    [onChange, onValueChange]
  )

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
    <label
      class={createClassName([
        styles.layer,
        bold === true ? styles.bold : null,
        component === true ? styles.component : null
      ])}
    >
      <input
        {...rest}
        ref={ref}
        checked={value === true}
        class={styles.input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        type="checkbox"
      />
      <div class={styles.box} />
      <div class={styles.icon}>{icon}</div>
      <div class={styles.children}>{children}</div>
      {typeof description === 'undefined' ? null : (
        <div class={styles.description}>{description}</div>
      )}
    </label>
  )
})
