/** @jsx h */
import { h } from 'preact'
import { Button } from './button'

export default { title: 'Button' }

export function Normal () {
  return <Button text='Text' />
}

export function NormalDisabled () {
  return <Button disabled text='Text' />
}

export function NormalFullWidth () {
  return <Button fullWidth text='Text' />
}

export function Secondary () {
  return <Button secondary text='Text' />
}

export function SecondaryDisabled () {
  return <Button secondary disabled text='Text' />
}

export function SecondaryFullWidth () {
  return <Button secondary fullWidth text='Text' />
}

export function Destructive () {
  return <Button destructive text='Text' />
}

export function DestructiveDisabled () {
  return <Button destructive disabled text='Text' />
}

export function DestructiveFullWidth () {
  return <Button destructive fullWidth text='Text' />
}

export function DestructiveSecondary () {
  return <Button destructive secondary text='Text' />
}

export function DestructiveSecondaryDisabled () {
  return <Button destructive secondary disabled text='Text' />
}

export function DestructiveSecondaryFullWidth () {
  return <Button destructive secondary fullWidth text='Text' />
}
