/* global figma */

const KEY = 'settings'

export function loadSettings (defaultSettings) {
  const settings = figma.clientStorage.getAsync(KEY)
  if (typeof settings === 'undefined') {
    return defaultSettings
  }
  return Object.assign(defaultSettings, settings)
}

export function saveSettings (settings) {
  return figma.clientStorage.setAsync(KEY, settings)
}
