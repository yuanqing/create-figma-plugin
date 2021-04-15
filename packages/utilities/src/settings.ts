import type { JsonObject } from 'type-fest'

const SETTINGS_KEY = 'settings'

/**
 * Loads your plugin’s `settings` (stored locally on the user’s computer).
 * Values in `settings` default to an optional `defaultSettings` object.
 *
 * @category Settings
 */
export async function loadSettingsAsync(
  defaultSettings: JsonObject
): Promise<JsonObject> {
  const settings: JsonObject = await figma.clientStorage.getAsync(SETTINGS_KEY)
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
export async function saveSettingsAsync(settings: JsonObject): Promise<void> {
  await figma.clientStorage.setAsync(SETTINGS_KEY, settings)
}
