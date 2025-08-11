import '../src/css/theme.css'
import '../src/css/fonts.css'
import '../src/css/base.css'

import { h } from 'preact'

const themes = [
  { title: 'Figma (Light)', value: 'figma-light' },
  { title: 'Figma (Dark)', value: 'figma-dark' },
  { title: 'FigJam', value: 'figjam' }
]

export const globalTypes = {
  theme: {
    defaultValue: 'figma-light',
    name: 'Theme',
    toolbar: {
      dynamicTitle: true,
      icon: 'mirror',
      items: themes
    }
  }
}

function updateTheme(activeTheme) {
  const bodyElement = document.body
  for (const theme of themes) {
    bodyElement.classList.remove(theme.value)
  }
  bodyElement.classList.add(activeTheme)
  document.body.style.backgroundColor =
    activeTheme === 'figma-dark' ? '#2c2c2c' : '#ffffff'
}

export const decorators = [
  function (Story, context) {
    const { theme } = context.globals
    updateTheme(theme)
    return (
      <div
        className={theme}
        style={
          context.parameters.fixedWidth === true
            ? { width: '240px' }
            : undefined
        }
      >
        <Story />
      </div>
    )
  }
]

export const parameters = {
  layout: 'centered',
  options: {
    storySort: function storySort(x, y) {
      function parseStory(story) {
        const split = story.title.split(/\//g)
        if (split.length === 1) {
          return {
            component: null,
            order: null,
            section: split[0],
            story: null
          }
        }
        const tag = story.tags.find(function (tag) {
          return /^\d+$/.test(tag)
        })
        const order = typeof tag === 'undefined' ? null : parseInt(tag, 10)
        return {
          component: split[1],
          order,
          section: split[0],
          story: split.slice(2).join('/')
        }
      }
      const sectionSortOrder = [
        'Index',
        'Components',
        'Inline Text',
        'Icons',
        'Layout',
        'Hooks'
      ]
      const xx = parseStory(x)
      const yy = parseStory(y)
      // Different `section`
      if (xx.section !== yy.section) {
        return (
          sectionSortOrder.indexOf(xx.section) -
          sectionSortOrder.indexOf(yy.section)
        )
      }
      // Different `component`
      if (xx.component !== yy.component) {
        return xx.component.localeCompare(yy.component, undefined, {
          numeric: true
        })
      }
      // Both `order` defined
      if (xx.order !== null && yy.order !== null) {
        return xx.order - yy.order
      }
      // Either `order` defined
      if (xx.order !== null) {
        return -1
      }
      if (yy.order !== null) {
        return 1
      }
      // Both `order` undefined
      return xx.story.localeCompare(yy.story, undefined, { numeric: true })
    }
  }
}
