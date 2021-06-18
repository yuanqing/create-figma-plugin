const DEFAULT_KEY = 'pluginTotalUseCount'

export async function getPluginTotalUseCountAsync(
  clientStorageKey = DEFAULT_KEY
): Promise<number> {
  const useCount: undefined | number = await figma.clientStorage.getAsync(
    clientStorageKey
  )
  if (typeof useCount === 'undefined') {
    return 0
  }
  return useCount
}

export async function incrementPluginTotalUseCountAsync(
  key = DEFAULT_KEY
): Promise<number> {
  const useCount = await getPluginTotalUseCountAsync(key)
  const newUseCount = useCount + 1
  await figma.clientStorage.setAsync(key, newUseCount)
  return newUseCount
}
