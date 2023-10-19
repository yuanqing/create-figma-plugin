import '../src/css/theme.css'
import '../src/css/fonts.css'
import '../src/css/base.css'

const themes = [
  { value: 'figma-light', title: 'Figma (Light)' },
  { value: 'figma-dark', title: 'Figma (Dark)' },
  { value: 'figjam', title: 'FigJam' },
]

export const globalTypes = {
  theme: {
    name: 'Theme',
    defaultValue: 'figma-light',
    toolbar: {
      icon: 'mirror',
      items: themes,
      dynamicTitle: true
    },
  }
}

function updateTheme(activeTheme) {
  const bodyElement = document.body
  for (const theme of themes) {
    bodyElement.classList.remove(theme.value)
  }
  bodyElement.classList.add(activeTheme)
  document.body.style.backgroundColor = activeTheme === 'figma-dark' ? '#2c2c2c' : '#ffffff'
}

export const decorators = [
  function (Story, context) {
    const { theme } = context.globals
    updateTheme(theme)
    return (
      <div style={context.parameters.fixedWidth === true ? { width: '240px' } : undefined} class={theme}>
        <Story />
      </div>
    )
  }
]

export const parameters = {
  layout: 'centered',
  options: {
    storySort: function storySort (x, y) {
      function parseStory(story) {
        const split = story.title.split(/\//g)
        if (split.length === 1) {
          return {
            section: split[0],
            component: null,
            story: null,
            order: null,
          }
        }
        const order = story.tags[0] === 'story' ? null : parseInt(story.tags[0], 10)
        return {
          section: split[0],
          component: split[1],
          story: split.slice(2).join('/'),
          order
        }
      }
      const sectionSortOrder = ['Index', 'Components', 'Inline Text', 'Icons', 'Layout', 'Hooks']
      const xx = parseStory(x)
      const yy = parseStory(y)
      // Different `section`
      if (xx.section !== yy.section) {
        return sectionSortOrder.indexOf(xx.section) - sectionSortOrder.indexOf(yy.section)
      }
      // Different `component`
      if (xx.component !== yy.component) {
        return xx.component.localeCompare(yy.component, undefined, { numeric: true })
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
