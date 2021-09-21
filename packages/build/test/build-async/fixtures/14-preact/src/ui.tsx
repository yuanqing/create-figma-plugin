/** @jsx h */
import { h, render } from 'preact'

export default function (rootNode: HTMLElement, data: { greeting: string }) {
  render(<p>{data.greeting}</p>, rootNode)
}
