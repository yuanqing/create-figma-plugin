/** @jsx h */
import { h } from 'preact'

import { Preview } from './preview'

export default { title: 'Components/Preview' }

export const Default = function () {
  return <Preview>Preview</Preview>
}

export const Overflow = function () {
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
