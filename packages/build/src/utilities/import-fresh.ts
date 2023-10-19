export function importFresh(filePath: string) {
  const timestamp = Date.now()
  return import(`${filePath}?${timestamp}`)
}
