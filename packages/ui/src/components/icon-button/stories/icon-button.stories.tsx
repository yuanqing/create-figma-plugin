/* eslint-disable no-console */
import { h, JSX } from 'preact'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus.js'
import { IconPlus24 } from '../../../icons/icon-24/icon-plus-24.js'
import { IconButton } from '../icon-button.js'

export default {
  title: 'Components/Icon Button'
}

export const Passive = function () {
  function handleClick(event: JSX.TargetedEvent<HTMLButtonElement>) {
    console.log(event)
  }
  return (
    <IconButton onClick={handleClick}>
      <IconPlus24 />
    </IconButton>
  )
}

export const Focused = function () {
  function handleClick(event: JSX.TargetedEvent<HTMLButtonElement>) {
    console.log(event)
  }
  return (
    <IconButton {...useInitialFocus()} onClick={handleClick}>
      <IconPlus24 />
    </IconButton>
  )
}

export const Disabled = function () {
  function handleClick(event: JSX.TargetedEvent<HTMLButtonElement>) {
    console.log(event)
  }
  return (
    <IconButton disabled onClick={handleClick}>
      <IconPlus24 />
    </IconButton>
  )
}
