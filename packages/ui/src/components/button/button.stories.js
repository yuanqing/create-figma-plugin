/** @jsx h */
import { h } from 'preact'
import { Button } from './button'

export default { title: 'Button' }

export function Normal () {
  return <Button>Text</Button>
}

export function NormalDisabled () {
  return <Button disabled>Text</Button>
}

export function NormalFullWidth () {
  return <Button fullWidth>Text</Button>
}

export function Secondary () {
  return <Button secondary>Text</Button>
}

export function SecondaryDisabled () {
  return (
    <Button secondary disabled>
      Text
    </Button>
  )
}

export function SecondaryFullWidth () {
  return (
    <Button secondary fullWidth>
      Text
    </Button>
  )
}

export function Destructive () {
  return <Button destructive>Text</Button>
}

export function DestructiveDisabled () {
  return (
    <Button destructive disabled>
      Text
    </Button>
  )
}

export function DestructiveFullWidth () {
  return (
    <Button destructive fullWidth>
      Text
    </Button>
  )
}

export function DestructiveSecondary () {
  return (
    <Button destructive secondary>
      Text
    </Button>
  )
}

export function DestructiveSecondaryDisabled () {
  return (
    <Button destructive secondary disabled>
      Text
    </Button>
  )
}

export function DestructiveSecondaryFullWidth () {
  return (
    <Button destructive secondary fullWidth>
      Text
    </Button>
  )
}
