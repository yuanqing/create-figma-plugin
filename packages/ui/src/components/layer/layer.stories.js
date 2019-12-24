/** @jsx h */
import { h } from 'preact'
import { Layer } from './layer'

export default { title: 'Layer' }

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
