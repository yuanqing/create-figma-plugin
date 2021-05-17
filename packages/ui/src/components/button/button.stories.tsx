/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'

import { useInitialFocus } from '../../hooks/use-initial-focus/use-initial-focus'
import { Button } from './button'

export default { title: 'Components/Button' }

export const Default = function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event)
  }
  return <Button onClick={handleClick}>Text</Button>
}

export const Focused = function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event)
  }
  return (
    <Button {...useInitialFocus()} onClick={handleClick}>
      Text
    </Button>
  )
}

export const Loading = function () {
  function handleClick() {
    throw new Error('This function should not be called')
  }
  return (
    <Button loading onClick={handleClick}>
      Text
    </Button>
  )
}

export const Disabled = function () {
  function handleClick() {
    throw new Error('This function should not be called')
  }
  return (
    <Button disabled onClick={handleClick}>
      Text
    </Button>
  )
}

export const FullWidth = function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event)
  }
  return (
    <Button fullWidth onClick={handleClick}>
      Text
    </Button>
  )
}

export const FullWidthLongText = function () {
  const longText = Array(100).fill('Text').join(' ')
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event)
  }
  return (
    <Button fullWidth onClick={handleClick}>
      {longText}
    </Button>
  )
}

export const Secondary = function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event)
  }
  return (
    <Button onClick={handleClick} secondary>
      Text
    </Button>
  )
}

export const Destructive = function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event)
  }
  return (
    <Button destructive onClick={handleClick}>
      Text
    </Button>
  )
}

export const DestructiveSecondary = function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event)
  }
  return (
    <Button destructive onClick={handleClick} secondary>
      Text
    </Button>
  )
}
