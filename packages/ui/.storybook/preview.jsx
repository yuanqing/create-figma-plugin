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
    storySort: {
      order: ['Index', 'Components', 'Inline Text', 'Icons', 'Layout', 'Hooks']
    }
  }
}
