/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus'
import { Button } from '../button'

export default {
  parameters: {
    order: 3
  },
  title: 'Components/Button/Secondary'
}

export const Passive = function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event)
  }
  return (
    <Button onClick={handleClick} secondary>
      Text
    </Button>
  )
}

export const Focused = function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event)
  }
  return (
    <Button {...useInitialFocus()} onClick={handleClick} secondary>
      Text
    </Button>
  )
}

export const Disabled = function () {
  function handleClick() {
    throw new Error('This function should not be called')
  }
  return (
    <Button disabled onClick={handleClick} secondary>
      Text
    </Button>
  )
}

export const Loading = function () {
  function handleClick() {
    throw new Error('This function should not be called')
  }
  return (
    <Button loading onClick={handleClick} secondary>
      Text
    </Button>
  )
}

export const LoadingFocused = function () {
  function handleClick() {
    throw new Error('This function should not be called')
  }
  return (
    <Button {...useInitialFocus()} loading onClick={handleClick} secondary>
      Text
    </Button>
  )
}

export const LoadingDisabled = function () {
  function handleClick() {
    throw new Error('This function should not be called')
  }
  return (
    <Button disabled loading onClick={handleClick} secondary>
      Text
    </Button>
  )
}

export const FullWidth = function () {
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event)
  }
  return (
    <Button fullWidth onClick={handleClick} secondary>
      Text
    </Button>
  )
}
FullWidth.parameters = {
  fixedWidth: true
}

export const FullWidthLongText = function () {
  const longText = Array(100).fill('Text').join(' ')
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event)
  }
  return (
    <Button fullWidth onClick={handleClick} secondary>
      {longText}
    </Button>
  )
}
FullWidthLongText.parameters = {
  fixedWidth: true
}
