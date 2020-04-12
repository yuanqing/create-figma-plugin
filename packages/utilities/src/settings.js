const KEY = 'settings'

export async function loadSettingsAsync (defaultSettings) {
  const settings = await figma.clientStorage.getAsync(KEY)
  if (typeof settings === 'undefined') {
    return defaultSettings
  }
  return Object.assign(defaultSettings, settings)
}

export function saveSettingsAsync (settings) {
  return figma.clientStorage.setAsync(KEY, settings)
}
