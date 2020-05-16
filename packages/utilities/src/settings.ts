const KEY = 'settings'

type Settings = { [key: string]: any }

export async function loadSettingsAsync (
  defaultSettings: Settings
): Promise<Settings> {
  const settings: Settings = await figma.clientStorage.getAsync(KEY)
  if (typeof settings === 'undefined') {
    return defaultSettings
  }
  return Object.assign(defaultSettings, settings)
}

export async function saveSettingsAsync (settings: Settings): Promise<void> {
  await figma.clientStorage.setAsync(KEY, settings)
}
