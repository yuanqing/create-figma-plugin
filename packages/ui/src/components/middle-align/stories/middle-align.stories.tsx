/** @jsx h */
import { h } from 'preact'

import { MiddleAlign } from '../middle-align'

export default { title: 'Components/Middle Align' }

export const Default = function () {
  const style = {
    backgroundColor: 'var(--figma-color-bg-selected)',
    height: 240
  }
  return (
    <div style={style}>
      <MiddleAlign>Text</MiddleAlign>
    </div>
  )
}
