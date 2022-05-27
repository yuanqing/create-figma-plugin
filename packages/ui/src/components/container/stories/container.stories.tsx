/** @jsx h */
import { h } from 'preact'

import { Container } from '../container'

export default {
  parameters: {
    fixedWidth: true
  },
  title: 'Layout/Container'
}

export const ExtraSmallSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-brand-tertiary)' }
  return (
    <Container space="extraSmall" style={style}>
      Text
    </Container>
  )
}

export const SmallSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-brand-tertiary)' }
  return (
    <Container space="small" style={style}>
      Text
    </Container>
  )
}

export const MediumSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-brand-tertiary)' }
  return (
    <Container space="medium" style={style}>
      Text
    </Container>
  )
}

export const LargeSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-brand-tertiary)' }
  return (
    <Container space="large" style={style}>
      Text
    </Container>
  )
}

export const ExtraLargeSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-brand-tertiary)' }
  return (
    <Container space="extraLarge" style={style}>
      Text
    </Container>
  )
}
