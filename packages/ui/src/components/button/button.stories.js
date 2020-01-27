/** @jsx h */
import { h } from 'preact'
import { Button } from './button'

export default { title: 'Button' }

const longText = Array(100)
  .fill('Text')
  .join(' ')

export const Primary = function () {
  return <Button>Text</Button>
}

export const PrimaryLoading = function () {
  return <Button loading>Text</Button>
}

export const PrimaryDisabled = function () {
  return <Button disabled>Text</Button>
}

export const PrimaryDisabledLoading = function () {
  return (
    <Button disabled loading>
      Text
    </Button>
  )
}

export const PrimaryFullWidth = function () {
  return <Button fullWidth>Text</Button>
}

export const PrimaryFullWidthLongText = function () {
  return <Button fullWidth>{longText}</Button>
}

export const Secondary = function () {
  return <Button secondary>Text</Button>
}

export const SecondaryLoading = function () {
  return (
    <Button secondary loading>
      Text
    </Button>
  )
}

export const SecondaryDisabled = function () {
  return (
    <Button secondary disabled>
      Text
    </Button>
  )
}

export const SecondaryDisabledLoading = function () {
  return (
    <Button secondary disabled loading>
      Text
    </Button>
  )
}

export const SecondaryFullWidth = function () {
  return (
    <Button secondary fullWidth>
      Text
    </Button>
  )
}

export const SecondaryFullWidthLongText = function () {
  return (
    <Button secondary fullWidth>
      {longText}
    </Button>
  )
}

export const Destructive = function () {
  return <Button destructive>Text</Button>
}

export const DestructiveLoading = function () {
  return (
    <Button destructive loading>
      Text
    </Button>
  )
}

export const DestructiveDisabled = function () {
  return (
    <Button destructive disabled>
      Text
    </Button>
  )
}

export const DestructiveDisabledLoading = function () {
  return (
    <Button destructive disabled loading>
      Text
    </Button>
  )
}

export const DestructiveFullWidth = function () {
  return (
    <Button destructive fullWidth>
      Text
    </Button>
  )
}

export const DestructiveFullWidthLongText = function () {
  return (
    <Button destructive fullWidth>
      {longText}
    </Button>
  )
}

export const DestructiveSecondary = function () {
  return (
    <Button destructive secondary>
      Text
    </Button>
  )
}

export const DestructiveSecondaryLoading = function () {
  return (
    <Button destructive secondary loading>
      Text
    </Button>
  )
}

export const DestructiveSecondaryDisabled = function () {
  return (
    <Button destructive secondary disabled>
      Text
    </Button>
  )
}

export const DestructiveSecondaryDisabledLoading = function () {
  return (
    <Button destructive secondary disabled loading>
      Text
    </Button>
  )
}

export const DestructiveSecondaryFullWidth = function () {
  return (
    <Button destructive secondary fullWidth>
      Text
    </Button>
  )
}

export const DestructiveSecondaryFullWidthLongText = function () {
  return (
    <Button destructive secondary fullWidth>
      {longText}
    </Button>
  )
}
