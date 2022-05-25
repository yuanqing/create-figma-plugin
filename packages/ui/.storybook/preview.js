/** @jsx h */
import '../src/css/theme.css'
import '../src/css/base.css'

import { h } from 'preact'

export const decorators = [
  function (Story, storyContext) {
    if (storyContext.parameters.fixedWidth === false) {
      return <Story />
    }
    const style = { width: '240px' }
    return (
      <div style={style}>
        <Story />
      </div>
    )
  }
]

const groupOrder = ['components', 'inline-text', 'icons', 'layout', 'hooks']

export const parameters = {
  layout: 'centered',
  options: {
    storySort: function (x, y) {
      if (x[1].componentId === y[1].componentId) {
        // Same file
        return 0
      }
      const xSplit = x[1].componentId.split(/-+/g).slice(0, 2)
      const ySplit = y[1].componentId.split(/-+/g).slice(0, 2)
      // Different top-level group
      if (xSplit[0] !== ySplit[0]) {
        const xGroupOrder = groupOrder.indexOf(xSplit[0])
        const yGroupOrder = groupOrder.indexOf(ySplit[0])
        if (xGroupOrder === -1) {
          return 1
        }
        if (yGroupOrder === -1) {
          return -1
        }
        return xGroupOrder - yGroupOrder
      }
      // Same component
      if (xSplit[1] === ySplit[1]) {
        if (
          typeof x[1].parameters.order !== 'undefined' &&
          typeof y[1].parameters.order !== 'undefined'
        ) {
          return x[1].parameters.order - y[1].parameters.order
        }
        if (typeof x[1].parameters.order !== 'undefined') {
          return -1
        }
        if (typeof y[1].parameters.order !== 'undefined') {
          return 1
        }
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
