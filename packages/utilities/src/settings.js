/* global figma */

export function loadSettings () {
  return figma.clientStorage.getAsync('settings')
}

export function saveSettings (settings) {
  return figma.clientStorage.setAsync('settings', settings)
}
