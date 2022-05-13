/** @jsx h */
import '../src/css/theme.css'
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
    clearable: false,
    default: 'Figma Light',
    list: [
      { class: 'theme-figma-light', color: '#0d99ff', name: 'Figma Light' },
      { class: 'theme-figma-dark', color: '#0c8ce9', name: 'Figma Dark' },
      { class: 'theme-figjam', color: '#9747ff', name: 'FigJam' }
    ]
  }
}
