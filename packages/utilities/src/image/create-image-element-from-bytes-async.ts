import { createImageElementFromBlobAsync } from './create-image-element-from-blob-async.js'

/**
 * Creates an [`HTMLImageElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)
 * from the `bytes` of an image.
 *
 * @category Image
 */
export async function createImageElementFromBytesAsync(
  bytes: Uint8Array
): Promise<HTMLImageElement> {
  return createImageElementFromBlobAsync(new Blob([bytes]))
}
