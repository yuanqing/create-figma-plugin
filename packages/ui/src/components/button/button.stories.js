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

export function Secondary () {
  return <Button text='Text' secondary />
}

export function SecondaryDisabled () {
  return <Button text='Text' secondary disabled />
}
