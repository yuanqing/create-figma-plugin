/** @jsx h */
import { h } from 'preact'
import { Button } from './button'

export default { title: 'Button' }

export const Normal = function () {
  return <Button>Text</Button>
}

export const NormalDisabled = function () {
  return <Button disabled>Text</Button>
}

export const NormalFullWidth = function () {
  return <Button fullWidth>Text</Button>
}

export const Secondary = function () {
  return <Button secondary>Text</Button>
}

export const SecondaryDisabled = function () {
  return (
    <Button secondary disabled>
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

export const Destructive = function () {
  return <Button destructive>Text</Button>
}

export const DestructiveDisabled = function () {
  return (
    <Button destructive disabled>
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

export const DestructiveSecondary = function () {
  return (
    <Button destructive secondary>
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

export const DestructiveSecondaryFullWidth = function () {
  return (
    <Button destructive secondary fullWidth>
      Text
    </Button>
  )
}
