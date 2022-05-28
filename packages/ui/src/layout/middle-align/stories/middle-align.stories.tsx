/** @jsx h */
import { h } from 'preact'

import { MiddleAlign } from '../middle-align'

export default { title: 'Layout/Middle Align' }

export const Default = function () {
  const style = {
    backgroundColor: 'var(--figma-color-bg-brand-tertiary)',
    height: 240
  }
  return (
    <div style={style}>
      <MiddleAlign>Text</MiddleAlign>
    </div>
  )
}
