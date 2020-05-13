/** @jsx h */
import { h, render as preactRender } from 'preact'
require('./scss/base.scss')

export function render (Plugin, props) {
  return function (rootNode, data) {
    preactRender(<Plugin {...data} {...props} />, rootNode)
  }
}
