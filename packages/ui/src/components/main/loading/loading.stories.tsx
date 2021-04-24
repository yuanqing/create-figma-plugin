/** @jsx h */
import { h } from 'preact'

import { Text } from '../text/text'
import { Loading } from './loading'

export default { title: 'Components/Main/Loading' }

export const Default = function () {
  const style = { height: '240px' }
  return (
    <div style={style}>
      <Loading>
        <Text align="center" numeric>
          Loading…
        </Text>
      </Loading>
    </div>
  )
}
