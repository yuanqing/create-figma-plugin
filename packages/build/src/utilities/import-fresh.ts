import { platform } from 'node:os'
import { pathToFileURL } from 'node:url'

const isWindows = platform() === 'win32'

export function importFresh(filePath: string) {
  const normalizedFilePath =
    isWindows === true ? pathToFileURL(filePath).href : filePath
  const timestamp = Date.now()
  return import(`${normalizedFilePath}?${timestamp}`)
}
