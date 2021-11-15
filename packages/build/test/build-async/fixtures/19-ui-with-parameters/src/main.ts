import { showUI } from '@create-figma-plugin/utilities'

export default function () {
  const options = { height: 120, width: 240 }
  const data = { greeting: 'Hello, World!' }

  figma.parameters.on('input', async ({ key, result }: ParameterInputEvent) => {
    if (key === 'option') {
      result.setSuggestions(['Option 1', 'Option 2'])
    }
  })

  figma.on('run', ({ parameters }: RunEvent) => {
    if (parameters) {
      // some action based on parameters
      figma.closePlugin(`Hello from the other side`)
    } else {
      showUI(options, data)
    }
  })
}
