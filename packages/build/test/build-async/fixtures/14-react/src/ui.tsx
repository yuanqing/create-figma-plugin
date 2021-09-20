import { h, render } from 'preact'

import { ReactComponent } from './react-component'

export default function (rootNode: HTMLElement, data: { greeting: string }) {
  render(<ReactComponent>{data.greeting}</ReactComponent>, rootNode)
}
