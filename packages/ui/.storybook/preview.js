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

const groupOrder = ['Layout', 'Components', 'Inline Text', 'Icons', 'Hooks']

function parseStory(story) {
  const split = story.title.split(/\//g)
  return [split[0], split[1], [...split.slice(2), story.story].join('/')]
}

const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

export const parameters = {
  layout: 'centered',
  options: {
    storySort: function (x, y) {
      // Same file
      if (x[1].componentId === y[1].componentId) {
        return 0
      }
      const xx = parseStory(x[1])
      const yy = parseStory(y[1])
      // Different `[0]`
      if (xx[0] !== yy[0]) {
        const xGroupOrder = groupOrder.indexOf(xx[0])
        const yGroupOrder = groupOrder.indexOf(yy[0])
        if (xGroupOrder === -1) {
          return 1
        }
        if (yGroupOrder === -1) {
          return -1
        }
        return xGroupOrder - yGroupOrder
      }
      // Different `[1]`
      if (xx[1] !== yy[1]) {
        return xx[1].localeCompare(yy[1], undefined, { numeric: true })
      }
      // Both `order` defined
      if (
        typeof x[1].parameters.order !== 'undefined' &&
        typeof y[1].parameters.order !== 'undefined'
      ) {
        return x[1].parameters.order - y[1].parameters.order
      }
      // Either `order` defined
      if (typeof x[1].parameters.order !== 'undefined') {
        return -1
      }
      if (typeof y[1].parameters.order !== 'undefined') {
        return 1
      }
      // Both `order` undefined
      return xx[2].localeCompare(yy[2], undefined, { numeric: true })
    }
  },
  themes: {
    clearable: false,
    list: [
      {
        class: 'figma-light',
        color: '#0d99ff',
        default: isDarkMode === false,
        name: 'Figma Design: Light'
      },
      {
        class: 'figma-dark',
        color: '#0c8ce9',
        default: isDarkMode === true,
        name: 'Figma Design: Dark'
      },
      { class: 'figjam', color: '#9747ff', name: 'FigJam' }
    ]
  }
}
