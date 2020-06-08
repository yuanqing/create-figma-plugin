/** @jsx h */
import { h } from 'preact'

import { Button } from './button'

export default { title: 'Button' }

const longText = Array(100).fill('Text').join(' ')

function handleClick() {}

export const Primary = function () {
  return <Button onClick={handleClick}>Text</Button>
}

export const PrimaryLoading = function () {
  return (
    <Button loading onClick={handleClick}>
      Text
    </Button>
  )
}

export const PrimaryDisabled = function () {
  return (
    <Button disabled onClick={handleClick}>
      Text
    </Button>
  )
}

export const PrimaryDisabledLoading = function () {
  return (
    <Button disabled loading onClick={handleClick}>
      Text
    </Button>
  )
}

export const PrimaryFullWidth = function () {
  return (
    <Button fullWidth onClick={handleClick}>
      Text
    </Button>
  )
}

export const PrimaryFullWidthLongText = function () {
  return (
    <Button fullWidth onClick={handleClick}>
      {longText}
    </Button>
  )
}

export const Secondary = function () {
  return (
    <Button onClick={handleClick} secondary>
      Text
    </Button>
  )
}

export const SecondaryLoading = function () {
  return (
    <Button loading onClick={handleClick} secondary>
      Text
    </Button>
  )
}

export const SecondaryDisabled = function () {
  return (
    <Button disabled onClick={handleClick} secondary>
      Text
    </Button>
  )
}

export const SecondaryDisabledLoading = function () {
  return (
    <Button disabled loading onClick={handleClick} secondary>
      Text
    </Button>
  )
}

export const SecondaryFullWidth = function () {
  return (
    <Button fullWidth onClick={handleClick} secondary>
      Text
    </Button>
  )
}

export const SecondaryFullWidthLongText = function () {
  return (
    <Button fullWidth onClick={handleClick} secondary>
      {longText}
    </Button>
  )
}

export const Destructive = function () {
  return (
    <Button destructive onClick={handleClick}>
      Text
    </Button>
  )
}

export const DestructiveLoading = function () {
  return (
    <Button destructive loading onClick={handleClick}>
      Text
    </Button>
  )
}

export const DestructiveDisabled = function () {
  return (
    <Button destructive disabled onClick={handleClick}>
      Text
    </Button>
  )
}

export const DestructiveDisabledLoading = function () {
  return (
    <Button destructive disabled loading onClick={handleClick}>
      Text
    </Button>
  )
}

export const DestructiveFullWidth = function () {
  return (
    <Button destructive fullWidth onClick={handleClick}>
      Text
    </Button>
  )
}

export const DestructiveFullWidthLongText = function () {
  return (
    <Button destructive fullWidth onClick={handleClick}>
      {longText}
    </Button>
  )
}

export const DestructiveSecondary = function () {
  return (
    <Button destructive onClick={handleClick} secondary>
      Text
    </Button>
  )
}

export const DestructiveSecondaryLoading = function () {
  return (
    <Button destructive loading onClick={handleClick} secondary>
      Text
    </Button>
  )
}

export const DestructiveSecondaryDisabled = function () {
  return (
    <Button destructive disabled onClick={handleClick} secondary>
      Text
    </Button>
  )
}

export const DestructiveSecondaryDisabledLoading = function () {
  return (
    <Button destructive disabled loading onClick={handleClick} secondary>
      Text
    </Button>
  )
}

export const DestructiveSecondaryFullWidth = function () {
  return (
    <Button destructive fullWidth onClick={handleClick} secondary>
      Text
    </Button>
  )
}

export const DestructiveSecondaryFullWidthLongText = function () {
  return (
    <Button destructive fullWidth onClick={handleClick} secondary>
      {longText}
    </Button>
  )
}
