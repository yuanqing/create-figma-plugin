/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { Layer } from './layer'

export default { title: 'Components/Layer' }

export const Frame = function () {
  const [selected, setSelected] = useState(false)
  function handleClick() {
    setSelected(selected === false)
  }
  return (
    <Layer onClick={handleClick} selected={selected} type="frame">
      Text
    </Layer>
  )
}

export const Selected = function () {
  const [selected, setSelected] = useState(true)
  function handleClick() {
    setSelected(selected === false)
  }
  return (
    <Layer onClick={handleClick} selected={selected} type="frame">
      Text
    </Layer>
  )
}

export const PageName = function () {
  const [selected, setSelected] = useState(false)
  function handleClick() {
    setSelected(selected === false)
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

export const LongText = function () {
  const longText = Array(100).fill('Text').join(' ')
  const [selected, setSelected] = useState(false)
  function handleClick() {
    setSelected(selected === false)
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
    setSelected(selected === false)
  }
  return (
    <Layer onClick={handleClick} selected={selected} type="component">
      Text
    </Layer>
  )
}
