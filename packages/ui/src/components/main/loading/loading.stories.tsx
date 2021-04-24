/** @jsx h */
import { h } from 'preact'

import { Loading } from './loading'
import { Text } from '../text/text'

export default { title: 'Components/Main/Loading' }

export const Default = function () {
  const style = { height: '240px' }
  return (
    <div style={style}>
      <Loading>
        <Text align="center" numeric>Loading…</Text>
      </Loading>
    </div>
  )
}
