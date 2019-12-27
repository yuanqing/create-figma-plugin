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

export const FrameLongText = function () {
  return <Layer type='frame'>{longText}</Layer>
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

export const ComponentLongText = function () {
  return <Layer type='component'>{longText}</Layer>
}
