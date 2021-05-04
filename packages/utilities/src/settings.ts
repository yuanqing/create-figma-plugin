const DEFAULT_SETTINGS_KEY = 'settings'

/**
 * Loads your plugin’s `settings` (stored locally on the user’s computer).
 * Values in `settings` default to an optional `defaultSettings` object.
 *
 * @category Settings
 */
export async function loadSettingsAsync<S>(
  defaultSettings: S,
  settingsKey = DEFAULT_SETTINGS_KEY
): Promise<S> {
  const settings: S = await figma.clientStorage.getAsync(settingsKey)
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
export async function saveSettingsAsync<S>(
  settings: S,
  settingsKey = DEFAULT_SETTINGS_KEY
): Promise<void> {
  await figma.clientStorage.setAsync(settingsKey, settings)
}
