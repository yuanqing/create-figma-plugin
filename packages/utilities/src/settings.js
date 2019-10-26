/* global figma */

const KEY = 'settings'

export function loadSettings () {
  return figma.clientStorage.getAsync(KEY)
}

export function saveSettings (settings) {
  return figma.clientStorage.setAsync(KEY, settings)
}
