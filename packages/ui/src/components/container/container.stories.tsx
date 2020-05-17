/** @jsx h */
import { h } from 'preact'

import { Text } from '../text/text'
import { Container } from './container'

export default { title: 'Container' }

const style = {
  backgroundColor: 'rgba(0, 0, 255, 0.2)'
}

export const ExtraSmallSpace = function () {
  return (
    <Container space='extraSmall' {...{ style }}>
      <Text>Text</Text>
    </Container>
  )
}

export const SmallSpace = function () {
  return (
    <Container space='small' {...{ style }}>
      <Text>Text</Text>
    </Container>
  )
}

export const MediumSpace = function () {
  return (
    <Container space='medium' {...{ style }}>
      <Text>Text</Text>
    </Container>
  )
}

export const LargeSpace = function () {
  return (
    <Container space='large' {...{ style }}>
      <Text>Text</Text>
    </Container>
  )
}

export const ExtraLargeSpace = function () {
  return (
    <Container space='extraLarge' {...{ style }}>
      <Text>Text</Text>
    </Container>
  )
}
