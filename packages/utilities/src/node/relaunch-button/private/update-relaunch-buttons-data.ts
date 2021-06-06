const RELAUNCH_BUTTONS_PLUGIN_DATA_KEY = 'relaunchButtons'

export function getRelaunchButtonsData(node: BaseNode): Record<string, string> {
  const pluginData = node.getPluginData(RELAUNCH_BUTTONS_PLUGIN_DATA_KEY)
  if (pluginData === '') {
    return {}
  }
  return JSON.parse(pluginData) as Record<string, string>
}

export function setRelaunchButtonsData(
  node: BaseNode,
  relaunchButtonsData: Record<string, string>
): void {
  if (Object.keys(relaunchButtonsData).length === 0) {
    node.setPluginData(RELAUNCH_BUTTONS_PLUGIN_DATA_KEY, '')
    return
  }
  node.setPluginData(
    RELAUNCH_BUTTONS_PLUGIN_DATA_KEY,
    JSON.stringify(relaunchButtonsData)
  )
}
