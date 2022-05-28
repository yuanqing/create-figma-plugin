/** @jsx h */
import { ComponentChild, h, JSX } from 'preact'

import { IconCaretRight16 } from '../../icons/icon-16/icon-caret-right-16'
import { Props } from '../../types/types'
import styles from './disclosure.css'

export type DisclosureProps = {
  children: ComponentChild
  isOpen: boolean
  onClick: JSX.MouseEventHandler<HTMLElement>
  title: string
}

export function Disclosure({
  children,
  onClick,
  isOpen,
  title,
  ...rest
}: Props<HTMLDivElement, DisclosureProps>): JSX.Element {
  return (
    <div {...rest} class={isOpen === true ? styles.isOpen : undefined}>
      <div class={styles.title} onClick={onClick}>
        <div class={styles.icon}>
          <IconCaretRight16 />
        </div>
        {title}
      </div>
      <div class={styles.children}>{children}</div>
    </div>
  )
}
