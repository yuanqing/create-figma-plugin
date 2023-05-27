// .storybook/manager.js

import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'

addons.setConfig({
  enableShortcuts: false,
  sidebar: {
    showRoots: false
  },
  theme: create({
    appBorderRadius: 0,
    base: 'dark',
    colorPrimary: '#e03e1a',
    colorSecondary: '#007be5',
    fontBase:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    fontCode: "SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace"
  }),
  toolbar: {
    copy: { hidden: true },
    eject: { hidden: true },
    fullscreen: { hidden: true },
    title: { hidden: true },
    zoom: { hidden: true }
  }
})
