/** @jsx h */
import { h } from 'preact'
import { useEffect, useRef } from 'preact/hooks'
import styles from './textbox.scss'
import classnames from '@sindresorhus/class-names'

export function Textbox ({ focused, icon, noBorder, value, ...rest }) {
  const withIcon = typeof icon !== 'undefined'

  const inputElement = useRef(null)

  function handleFocus () {
    inputElement.current.focus()
    inputElement.current.select()
  }

  if (focused === true) {
    useEffect(handleFocus, [])
  }

  return (
    <div
      class={classnames(
        styles.textbox,
        noBorder === true ? styles.noBorder : null,
        withIcon === true ? styles.withIcon : null
      )}
    >
      <input
        {...rest}
        ref={inputElement}
        type='text'
        class={styles.input}
        value={value}
        onFocus={handleFocus}
      />
      {withIcon ? <div class={styles.icon}>{icon}</div> : null}
    </div>
  )
}
