/* eslint-disable no-console */
import { h, JSX } from 'preact'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus.js'
import { Button } from '../button.js'

export default {
  tags: ['2'],
  title: 'Components/Button/Danger'
}

export const Passive = function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event)
  }
  return (
    <Button danger onClick={handleClick}>
      Text
    </Button>
  )
}

export const Focused = function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event)
  }
  return (
    <Button {...useInitialFocus()} danger onClick={handleClick}>
      Text
    </Button>
  )
}

export const Disabled = function () {
  function handleClick() {
    throw new Error('This function should not be called')
  }
  return (
    <Button danger disabled onClick={handleClick}>
      Text
    </Button>
  )
}

export const Loading = function () {
  function handleClick() {
    throw new Error('This function should not be called')
  }
  return (
    <Button danger loading onClick={handleClick}>
      Text
    </Button>
  )
}

export const LoadingFocused = function () {
  function handleClick() {
    throw new Error('This function should not be called')
  }
  return (
    <Button {...useInitialFocus()} danger loading onClick={handleClick}>
      Text
    </Button>
  )
}

export const LoadingDisabled = function () {
  function handleClick() {
    throw new Error('This function should not be called')
  }
  return (
    <Button danger disabled loading onClick={handleClick}>
      Text
    </Button>
  )
}

export const FullWidth = function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event)
  }
  return (
    <Button danger fullWidth onClick={handleClick}>
      Text
    </Button>
  )
}
FullWidth.parameters = {
  fixedWidth: true
}
