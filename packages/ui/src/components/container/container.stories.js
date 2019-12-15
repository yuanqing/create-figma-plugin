/** @jsx h */
import { h } from 'preact'
import { Container } from './container'
import { Text } from '../text/text'

export default { title: 'Container' }

const style = {
  backgroundColor: 'rgba(0, 0, 255, 0.2)'
}

export const ExtraSmall = function () {
  return (
    <Container space='extraSmall' style={style}>
      <Text>Text</Text>
    </Container>
  )
}

export const Small = function () {
  return (
    <Container space='small' style={style}>
      <Text>Text</Text>
    </Container>
  )
}

export const Medium = function () {
  return (
    <Container space='medium' style={style}>
      <Text>Text</Text>
    </Container>
  )
}

export const Large = function () {
  return (
    <Container space='large' style={style}>
      <Text>Text</Text>
    </Container>
  )
}
