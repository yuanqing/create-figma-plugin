const KEY = 'settings'

type Settings = { [key: string]: any }

/**
 * Loads your plugin’s `settings` (stored locally on the user’s computer).
 * Values in `settings` default to an optional `defaultSettings` object.
 *
 * @category Settings
 */
export async function loadSettingsAsync(
  defaultSettings: Settings
): Promise<Settings> {
  const settings: Settings = await figma.clientStorage.getAsync(KEY)
  if (typeof settings === 'undefined') {
    return defaultSettings
  }
  return Object.assign(defaultSettings, settings)
}

/**
 * Saves the given `settings` for your plugin (stored locally on the user’s
 * computer).
 *
 * @category Settings
 */
export async function saveSettingsAsync(settings: Settings): Promise<void> {
  await figma.clientStorage.setAsync(KEY, settings)
}
