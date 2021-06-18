import { DocumentUseCountPluginData } from './types.js'

const DEFAULT_KEY = 'documentUseCount'

export async function getDocumentUseCountAsync(
  pluginDataKey = DEFAULT_KEY
): Promise<number> {
  const value = figma.root.getPluginData(pluginDataKey)
  if (value === '') {
    return 0
  }
  const pluginData: DocumentUseCountPluginData = JSON.parse(value)
  return pluginData.useCount
}

export async function incrementDocumentUseCountAsync(
  settingsKey = DEFAULT_KEY
): Promise<number> {
  const useCount = await getDocumentUseCountAsync(settingsKey)
  const pluginData: DocumentUseCountPluginData = {
    useCount: useCount + 1
  }
  figma.root.setPluginData(settingsKey, JSON.stringify(pluginData))
  return pluginData.useCount
}
