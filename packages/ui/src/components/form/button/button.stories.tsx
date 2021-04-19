/* eslint-disable no-console */
/** @jsx h */
import { h } from 'preact'

import { Button } from './button'

export default { title: 'ui/Form/Button' }

export const Default = function () {
  function handleClick(event: MouseEvent) {
    console.log(event)
  }
  return <Button onClick={handleClick}>Text</Button>
}

export const Loading = function () {
  function handleClick(event: MouseEvent) {
    console.log(event)
  }
  return (
    <Button loading onClick={handleClick}>
      Text
    </Button>
  )
}

export const Disabled = function () {
  function handleClick(event: MouseEvent) {
    console.log(event)
  }
  return (
    <Button disabled onClick={handleClick}>
      Text
    </Button>
  )
}

export const FullWidth = function () {
  function handleClick(event: MouseEvent) {
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
  function handleClick(event: MouseEvent) {
    console.log(event)
  }
  return (
    <Button fullWidth onClick={handleClick}>
      {longText}
    </Button>
  )
}

export const Secondary = function () {
  function handleClick(event: MouseEvent) {
    console.log(event)
  }
  return (
    <Button onClick={handleClick} secondary>
      Text
    </Button>
  )
}

export const Destructive = function () {
  function handleClick(event: MouseEvent) {
    console.log(event)
  }
  return (
    <Button destructive onClick={handleClick}>
      Text
    </Button>
  )
}

export const DestructiveSecondary = function () {
  function handleClick(event: MouseEvent) {
    console.log(event)
  }
  return (
    <Button destructive onClick={handleClick} secondary>
      Text
    </Button>
  )
}
