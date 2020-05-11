/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { Layer } from './layer'

export default { title: 'Layer' }

const longText = Array(100)
  .fill('Text')
  .join(' ')

export const Frame = function () {
  const [isSelected, setIsSelected] = useState(false)
  function handleClick () {
    setIsSelected(!(isSelected === true))
  }
  return (
    <Layer type='frame' selected={isSelected} onClick={handleClick}>
      Text
    </Layer>
  )
}

export const FrameSelected = function () {
  const [isSelected, setIsSelected] = useState(true)
  function handleClick () {
    setIsSelected(!(isSelected === true))
  }
  return (
    <Layer type='frame' selected={isSelected} onClick={handleClick}>
      Text
    </Layer>
  )
}

export const FrameWithPageName = function () {
  const [isSelected, setIsSelected] = useState(false)
  function handleClick () {
    setIsSelected(!(isSelected === true))
  }
  return (
    <Layer
      type='frame'
      pageName='Page Name'
      selected={isSelected}
      onClick={handleClick}
    >
      Text
    </Layer>
  )
}

export const FrameLongText = function () {
  const [isSelected, setIsSelected] = useState(false)
  function handleClick () {
    setIsSelected(!(isSelected === true))
  }
  return (
    <Layer
      type='frame'
      pageName='Page Name'
      selected={isSelected}
      onClick={handleClick}
    >
      {longText}
    </Layer>
  )
}

export const Component = function () {
  const [isSelected, setIsSelected] = useState(false)
  function handleClick () {
    setIsSelected(!(isSelected === true))
  }
  return (
    <Layer type='component' selected={isSelected} onClick={handleClick}>
      Text
    </Layer>
  )
}

export const ComponentSelected = function () {
  const [isSelected, setIsSelected] = useState(true)
  function handleClick () {
    setIsSelected(!(isSelected === true))
  }
  return (
    <Layer type='component' selected={isSelected} onClick={handleClick}>
      Text
    </Layer>
  )
}

export const ComponentWithPageName = function () {
  const [isSelected, setIsSelected] = useState(false)
  function handleClick () {
    setIsSelected(!(isSelected === true))
  }
  return (
    <Layer
      type='component'
      pageName='Page Name'
      selected={isSelected}
      onClick={handleClick}
    >
      Text
    </Layer>
  )
}

export const ComponentLongText = function () {
  const [isSelected, setIsSelected] = useState(false)
  function handleClick () {
    setIsSelected(!(isSelected === true))
  }
  return (
    <Layer
      type='component'
      pageName='Page Name'
      selected={isSelected}
      onClick={handleClick}
    >
      {longText}
    </Layer>
  )
}
