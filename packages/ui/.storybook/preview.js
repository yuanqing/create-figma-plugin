/** @jsx h */
import '../src/css/base.css'

import { h } from 'preact'

export const decorators = [
  function (Story, storyContext) {
    if (storyContext.parameters.fixedWidth === true) {
      const style = { width: '240px' }
      return (
        <div style={style}>
          <Story />
        </div>
      )
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
  },
  themes: {
    default: 'Figma',
    list: [
      { class: 'theme-figma', color: '#18a0fb', name: 'Figma' },
      { class: 'theme-figjam', color: '#7b61ff', name: 'FigJam' }
    ]
  }
}
