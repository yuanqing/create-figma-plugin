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

const groupOrder = ['layout', 'components', 'inline-text', 'icons', 'hooks']

const componentIdRegex = new RegExp(`^(${groupOrder.join('|')})-(.+)`)

function parseComponentId(componentId) {
  const matches = componentId.match(componentIdRegex)
  if (matches === null) {
    return null
  }
  return {
    groupName: matches[1],
    title: matches[2]
  }
}

export const parameters = {
  layout: 'centered',
  options: {
    storySort: function (x, y) {
      // Same file
      if (x[1].componentId === y[1].componentId) {
        return 0
      }
      const xx = parseComponentId(x[1].componentId)
      const yy = parseComponentId(y[1].componentId)
      // `componentId` doesn’t match the expected pattern
      if (xx === null || yy === null) {
        return x[1].id.localeCompare(y[1].id, undefined, { numeric: true })
      }
      // Different group name
      if (xx.groupName !== yy.groupName) {
        const xGroupOrder = groupOrder.indexOf(xx.groupName)
        const yGroupOrder = groupOrder.indexOf(yy.groupName)
        if (xGroupOrder === -1) {
          return 1
        }
        if (yGroupOrder === -1) {
          return -1
        }
        return xGroupOrder - yGroupOrder
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
      return xx.title.localeCompare(yy.title, undefined, { numeric: true })
    }
  },
  themes: {
    clearable: false,
    list: [
      {
        class: 'figma-light',
        color: '#0d99ff',
        default: true,
        name: 'Figma Light'
      },
      { class: 'figma-dark', color: '#0c8ce9', name: 'Figma Dark' },
      { class: 'figjam', color: '#9747ff', name: 'FigJam' }
    ]
  }
}
