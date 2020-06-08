/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { DropdownMenu, DropdownOption } from './dropdown-menu'

export default { title: 'Dropdown Menu' }

const options: DropdownOption[] = [
  { value: 'foo' },
  { value: 'bar' },
  { value: 'baz' },
  { separator: true },
  { header: 'Header' },
  { value: 'qux' },
  { value: 'quux' },
  { value: 'quuux' },
  { value: 'quuuux' },
  { value: 'quuuuux' }
]

function Foo({ foo }: { foo?: string }) {
  return <h1 style={{ width: '240px' }}>{foo === null ? 'Select…' : foo}</h1>
}

export const BottomLeft = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <DropdownMenu
      name="foo"
      onChange={setState}
      options={options}
      value={state.foo}
    >
      <Foo />
    </DropdownMenu>
  )
}

export const BottomRight = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <DropdownMenu
      name="foo"
      onChange={setState}
      options={options}
      right
      value={state.foo}
    >
      <Foo />
    </DropdownMenu>
  )
}

export const TopLeft = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <div
      style={{
        marginTop: '128px'
      }}
    >
      <DropdownMenu
        name="foo"
        onChange={setState}
        options={options}
        top
        value={state.foo}
      >
        <Foo />
      </DropdownMenu>
    </div>
  )
}

export const TopRight = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <div
      style={{
        marginTop: '128px'
      }}
    >
      <DropdownMenu
        name="foo"
        onChange={setState}
        options={options}
        right
        top
        value={state.foo}
      >
        <Foo />
      </DropdownMenu>
    </div>
  )
}

export const Filled = function () {
  const [state, setState] = useState({ foo: 'qux' })
  return (
    <DropdownMenu
      name="foo"
      onChange={setState}
      options={options}
      value={state.foo}
    >
      <Foo />
    </DropdownMenu>
  )
}

export const FullWidth = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <DropdownMenu
      fullWidth
      name="foo"
      onChange={setState}
      options={options}
      value={state.foo}
    >
      <Foo />
    </DropdownMenu>
  )
}
