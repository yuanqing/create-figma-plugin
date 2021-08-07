type DocumentUseCountPluginData = {
  useCount: number
}

const DEFAULT_KEY = 'documentUseCount'

/**
 * Returns the plugin’s use count for the current document.
 *
 * @category Monetization
 */
export function getDocumentUseCount(key = DEFAULT_KEY): number {
  const value = figma.root.getPluginData(key)
  if (value === '') {
    return 0
  }
  const pluginData: DocumentUseCountPluginData = JSON.parse(value)
  return pluginData.useCount
}

/**
 * Increments the plugin’s use count for the current document.
 *
 * @returns Returns the plugin’s new use count.
 * @category Monetization
 */
export function incrementDocumentUseCount(key = DEFAULT_KEY): number {
  const useCount = getDocumentUseCount(key)
  const pluginData: DocumentUseCountPluginData = {
    useCount: useCount + 1
  }
  figma.root.setPluginData(key, JSON.stringify(pluginData))
  return pluginData.useCount
}

/**
 * Resets the plugin’s use count for the current document to `0`.
 *
 * @category Monetization
 */
export function resetDocumentUseCount(key = DEFAULT_KEY): void {
  const pluginData: DocumentUseCountPluginData = {
    useCount: 0
  }
  figma.root.setPluginData(key, JSON.stringify(pluginData))
}
