import { showUI } from '@create-figma-plugin/utilities'

export default function () {
  const options = { height: 120, width: 240 }
  const data = { greeting: 'Hello, World!' }
  showUI(options, data)
}
