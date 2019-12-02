/** @jsx h */
import { h } from 'preact'
import { Container } from './container'
import { Text } from '../text/text'

export default { title: 'Container' }

const style = {
  backgroundColor: 'rgba(0, 0, 255, 0.2)'
}

export function ExtraSmall () {
  return (
    <Container space='extraSmall' style={style}>
      <Text>Text</Text>
    </Container>
  )
}

export function Small () {
  return (
    <Container space='small' style={style}>
      <Text>Text</Text>
    </Container>
  )
}

export function Medium () {
  return (
    <Container space='medium' style={style}>
      <Text>Text</Text>
    </Container>
  )
}

export function Large () {
  return (
    <Container space='large' style={style}>
      <Text>Text</Text>
    </Container>
  )
}
