/** @jsx h */
import { h } from 'preact'
import { Stack } from './stack'
import { Text } from '../text/text'

export default { title: 'Stack' }

const style = {
  backgroundColor: 'rgba(0, 0, 255, 0.2)'
}

export function ExtraSmall () {
  return (
    <Stack extraSmall>
      <div style={style}>
        <Text>foo</Text>
      </div>
      <div style={style}>
        <Text>bar</Text>
      </div>
      <div style={style}>
        <Text>baz</Text>
      </div>
    </Stack>
  )
}

export function Small () {
  return (
    <Stack small>
      <div style={style}>
        <Text>foo</Text>
      </div>
      <div style={style}>
        <Text>bar</Text>
      </div>
      <div style={style}>
        <Text>baz</Text>
      </div>
    </Stack>
  )
}

export function Medium () {
  return (
    <Stack medium>
      <div style={style}>
        <Text>foo</Text>
      </div>
      <div style={style}>
        <Text>bar</Text>
      </div>
      <div style={style}>
        <Text>baz</Text>
      </div>
    </Stack>
  )
}

export function Large () {
  return (
    <Stack large>
      <div style={style}>
        <Text>foo</Text>
      </div>
      <div style={style}>
        <Text>bar</Text>
      </div>
      <div style={style}>
        <Text>baz</Text>
      </div>
    </Stack>
  )
}
