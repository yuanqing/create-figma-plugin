const DEFAULT_SETTINGS_KEY = 'settings'

/**
 * Loads your plugin/widget’s settings (stored locally on the user’s computer under
 * the given `settingsKey`).
 *
 * @param settingsKey  The key in [`figma.clientStorage`](https://figma.com/plugin-docs/api/figma-clientStorage/)
 * on which to store the settings. Defaults to `'settings'`.
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
 * Saves the given `settings` for your plugin/widget (stored locally on the user’s
 * computer under the given `settingsKey`).
 *
 * @param settingsKey  The key in [`figma.clientStorage`](https://figma.com/plugin-docs/api/figma-clientStorage/)
 * on which to store the settings. Defaults to `'settings'`.
 * @category Settings
 */
export async function saveSettingsAsync<Settings>(
  settings: Settings,
  settingsKey = DEFAULT_SETTINGS_KEY
): Promise<void> {
  await figma.clientStorage.setAsync(settingsKey, settings)
}
