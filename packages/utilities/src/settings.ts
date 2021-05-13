const DEFAULT_SETTINGS_KEY = 'settings'

/**
 * Loads your plugin’s settings (stored locally on the user’s computer under
 * the given `settingsKey`). `settingsKey` defaults to `'settings'`. Values
 * in `settings` default to an optional `defaultSettings` object.
 *
 * @category Settings
 */
export async function loadSettingsAsync<Settings>(
  defaultSettings: Settings,
  settingsKey = DEFAULT_SETTINGS_KEY
): Promise<Settings> {
  const settings: Settings = await figma.clientStorage.getAsync(settingsKey)
  if (typeof settings === 'undefined') {
    return defaultSettings
  }
  return Object.assign(defaultSettings, settings)
}

/**
 * Saves the given `settings` for your plugin (stored locally on the user’s
 * computer under the given `settingsKey`). `settingsKey` defaults to
 * `'settings'`.
 *
 * @category Settings
 */
export async function saveSettingsAsync<Settings>(
  settings: Settings,
  settingsKey = DEFAULT_SETTINGS_KEY
): Promise<void> {
  await figma.clientStorage.setAsync(settingsKey, settings)
}
