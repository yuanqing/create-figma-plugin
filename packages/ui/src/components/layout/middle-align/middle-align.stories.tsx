/** @jsx h */
import { h } from 'preact'

import { MiddleAlign } from './middle-align'

export default { title: 'Components/Layout/Middle Align' }

export const Default = function () {
  const style = { backgroundColor: '#daebf7', height: 240 }
  return (
    <div style={style}>
      <MiddleAlign>Text</MiddleAlign>
    </div>
  )
}
