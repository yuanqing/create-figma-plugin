/** @jsx h */
import { h } from 'preact'
import { Preview } from './preview'

export default { title: 'Preview' }

export function Normal () {
  return <Preview>Preview</Preview>
}

export function Overflow () {
  return (
    <Preview>
      foo
      <br />
      bar
      <br />
      baz
      <br />
      qux
      <br />
      quux
      <br />
      quuux
      <br />
      quuuux
      <br />
      quuuuux
      <br />
      quuuuuux
    </Preview>
  )
}
