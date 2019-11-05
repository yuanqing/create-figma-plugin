/* global figma */

const KEY = 'settings'

export function loadSettings (defaultSettings) {
  const settings = figma.clientStorage.getAsync(KEY)
  if (typeof settings === 'undefined') {
    return defaultSettings
  }
  return {
    ...defaultSettings,
    ...settings
  }
}

export function saveSettings (settings) {
  return figma.clientStorage.setAsync(KEY, settings)
}
