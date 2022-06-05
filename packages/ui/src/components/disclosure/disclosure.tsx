/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { IconCaretRight16 } from '../../icons/icon-16/icon-caret-right-16'
import { Props } from '../../types/types'
import styles from './disclosure.css'

export type DisclosureProps = {
  children: ComponentChildren
  onClick: JSX.MouseEventHandler<HTMLInputElement>
  open: boolean
  propagateEscapeKeyDown?: boolean
  title: string
}

export function Disclosure({
  children,
  onClick,
  open,
  propagateEscapeKeyDown = true,
  title,
  ...rest
}: Props<HTMLInputElement, DisclosureProps>): JSX.Element {
  const handleKeyDown = useCallback(
    function (event: JSX.TargetedKeyboardEvent<HTMLInputElement>): void {
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
    <label class={styles.disclosure}>
      <input
        {...rest}
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
      <div class={styles.children}>{children}</div>
    </label>
  )
}
