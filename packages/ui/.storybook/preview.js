/** @jsx h */
import { h } from 'preact'

import '../src/css/base.css'

export const decorators = [
  function (Story, storyContext) {
    if (storyContext.parameters.fixedWidth === true) {
      const style = {width: '240px'}
    return <div style={style}><Story /></div>
    }
    return <Story />
  }
]

export const parameters = {
  layout: 'centered',
  options: {
    storySort: function (x, y) {
      if (x[1].kind === y[1].kind) {
        return 0
      }
      return x[1].id.localeCompare(y[1].id, undefined, { numeric: true })
    }
  }
}
