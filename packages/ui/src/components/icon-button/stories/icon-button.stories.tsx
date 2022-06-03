/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus'
import { IconPlus32 } from '../../../icons/icon-32/icon-plus-32'
import { IconButton } from '../icon-button'

export default {
  title: 'Components/Icon Button'
}

export const Passive = function () {
  function handleClick(event: JSX.TargetedEvent<HTMLButtonElement>) {
    console.log(event)
  }
  return (
    <IconButton onClick={handleClick}>
      <IconPlus32 />
    </IconButton>
  )
}

export const Focused = function () {
  function handleClick(event: JSX.TargetedEvent<HTMLButtonElement>) {
    console.log(event)
  }
  return (
    <IconButton {...useInitialFocus()} onClick={handleClick}>
      <IconPlus32 />
    </IconButton>
  )
}

export const Disabled = function () {
  function handleClick(event: JSX.TargetedEvent<HTMLButtonElement>) {
    console.log(event)
  }
  return (
    <IconButton disabled onClick={handleClick}>
      <IconPlus32 />
    </IconButton>
  )
}
