/** @jsx h */
import { h } from 'preact'

import { Container } from '../container'

export default { title: 'Components/Container' }

export const ExtraSmallSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-selected)' }
  return (
    <Container space="extraSmall" style={style}>
      Text
    </Container>
  )
}

export const SmallSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-selected)' }
  return (
    <Container space="small" style={style}>
      Text
    </Container>
  )
}

export const MediumSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-selected)' }
  return (
    <Container space="medium" style={style}>
      Text
    </Container>
  )
}

export const LargeSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-selected)' }
  return (
    <Container space="large" style={style}>
      Text
    </Container>
  )
}

export const ExtraLargeSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-selected)' }
  return (
    <Container space="extraLarge" style={style}>
      Text
    </Container>
  )
}
