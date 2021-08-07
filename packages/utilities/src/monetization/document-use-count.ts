type DocumentUseCountPluginData = {
  useCount: number
}

const DEFAULT_KEY = 'documentUseCount'

export function getDocumentUseCount(key = DEFAULT_KEY): number {
  const value = figma.root.getPluginData(key)
  if (value === '') {
    return 0
  }
  const pluginData: DocumentUseCountPluginData = JSON.parse(value)
  return pluginData.useCount
}

export function incrementDocumentUseCount(key = DEFAULT_KEY): number {
  const useCount = getDocumentUseCount(key)
  const pluginData: DocumentUseCountPluginData = {
    useCount: useCount + 1
  }
  figma.root.setPluginData(key, JSON.stringify(pluginData))
  return pluginData.useCount
}

export function resetDocumentUseCount(key = DEFAULT_KEY): void {
  const pluginData: DocumentUseCountPluginData = {
    useCount: 0
  }
  figma.root.setPluginData(key, JSON.stringify(pluginData))
}
