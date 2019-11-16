/** @jsx h */
import { h } from 'preact'
import { Button } from './button'

export default { title: 'Button' }

export function Normal () {
  return <Button text='Text' />
}

export function Disabled () {
  return <Button text='Text' disabled />
}

export function FulllWidth () {
  return <Button text='Text' fullWidth />
}

export function Secondary () {
  return <Button text='Text' secondary />
}

export function SecondaryDisabled () {
  return <Button text='Text' secondary disabled />
}

export function Destructive () {
  return <Button text='Text' destructive />
}

export function DestructiveDisabled () {
  return <Button text='Text' destructive disabled />
}

export function DestructiveSecondary () {
  return <Button text='Text' destructive secondary />
}

export function DestructiveSecondaryDisabled () {
  return <Button text='Text' destructive secondary disabled />
}
