/** @jsx h */
import { h } from 'preact'
import { Container } from './container'
import { Text } from '../text/text'

export default { title: 'Container' }

const style = {
  backgroundColor: 'rgba(0, 0, 255, 0.2)'
}

export const ExtraSmallSpace = function () {
  return (
    <Container space='extraSmall' style={style}>
      <Text>Text</Text>
    </Container>
  )
}

export const SmallSpace = function () {
  return (
    <Container space='small' style={style}>
      <Text>Text</Text>
    </Container>
  )
}

export const MediumSpace = function () {
  return (
    <Container space='medium' style={style}>
      <Text>Text</Text>
    </Container>
  )
}

export const LargeSpace = function () {
  return (
    <Container space='large' style={style}>
      <Text>Text</Text>
    </Container>
  )
}

export const ExtraLargeSpace = function () {
  return (
    <Container space='extraLarge' style={style}>
      <Text>Text</Text>
    </Container>
  )
}
