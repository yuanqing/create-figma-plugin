/** @jsx h */
import { h } from 'preact'
import { Layer } from './layer'

export default { title: 'Layer' }

const longText = Array(100)
  .fill('Text')
  .join(' ')

export const Frame = function () {
  return <Layer type='frame'>Text</Layer>
}

export const FrameSelected = function () {
  return (
    <Layer type='frame' selected>
      Text
    </Layer>
  )
}

export const FrameWithPageName = function () {
  return (
    <Layer type='frame' pageName='Page Name'>
      Text
    </Layer>
  )
}

export const FrameLongText = function () {
  return (
    <Layer type='frame' pageName='Page Name'>
      {longText}
    </Layer>
  )
}

export const Component = function () {
  return <Layer type='component'>Text</Layer>
}

export const ComponentSelected = function () {
  return (
    <Layer type='component' selected>
      Text
    </Layer>
  )
}

export const ComponentWithPageName = function () {
  return (
    <Layer type='component' pageName='Page Name'>
      Text
    </Layer>
  )
}

export const ComponentLongText = function () {
  return (
    <Layer type='component' pageName='Page Name'>
      {longText}
    </Layer>
  )
}
