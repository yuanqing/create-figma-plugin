/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { Layer } from './layer'

export default { title: 'Layer' }

const longText = Array(100).fill('Text').join(' ')

export const Frame = function () {
  const [selected, setSelected] = useState(false)
  function handleClick() {
    setSelected(!(selected === true))
  }
  return (
    <Layer onClick={handleClick} selected={selected} type="frame">
      Text
    </Layer>
  )
}

export const FrameSelected = function () {
  const [selected, setSelected] = useState(true)
  function handleClick() {
    setSelected(!(selected === true))
  }
  return (
    <Layer onClick={handleClick} selected={selected} type="frame">
      Text
    </Layer>
  )
}

export const FrameWithPageName = function () {
  const [selected, setSelected] = useState(false)
  function handleClick() {
    setSelected(!(selected === true))
  }
  return (
    <Layer
      onClick={handleClick}
      pageName="Page Name"
      selected={selected}
      type="frame"
    >
      Text
    </Layer>
  )
}

export const FrameLongText = function () {
  const [selected, setSelected] = useState(false)
  function handleClick() {
    setSelected(!(selected === true))
  }
  return (
    <Layer
      onClick={handleClick}
      pageName="Page Name"
      selected={selected}
      type="frame"
    >
      {longText}
    </Layer>
  )
}

export const Component = function () {
  const [selected, setSelected] = useState(false)
  function handleClick() {
    setSelected(!(selected === true))
  }
  return (
    <Layer onClick={handleClick} selected={selected} type="component">
      Text
    </Layer>
  )
}

export const ComponentSelected = function () {
  const [selected, setSelected] = useState(true)
  function handleClick() {
    setSelected(!(selected === true))
  }
  return (
    <Layer onClick={handleClick} selected={selected} type="component">
      Text
    </Layer>
  )
}

export const ComponentWithPageName = function () {
  const [selected, setSelected] = useState(false)
  function handleClick() {
    setSelected(!(selected === true))
  }
  return (
    <Layer
      onClick={handleClick}
      pageName="Page Name"
      selected={selected}
      type="component"
    >
      Text
    </Layer>
  )
}

export const ComponentLongText = function () {
  const [selected, setSelected] = useState(false)
  function handleClick() {
    setSelected(!(selected === true))
  }
  return (
    <Layer
      onClick={handleClick}
      pageName="Page Name"
      selected={selected}
      type="component"
    >
      {longText}
    </Layer>
  )
}
