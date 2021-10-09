import { on, showUI } from '@create-figma-plugin/utilities'

import { ResizeWindowHandler } from './types'

export default function () {
  on<ResizeWindowHandler>(
    'RESIZE_WINDOW',
    function ({ width, height }: { width: number; height: number }) {
      figma.ui.resize(width, height)
    }
  )
  showUI({
    height: 240,
    width: 240
  })
}
