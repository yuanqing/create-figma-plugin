import { createCanvasElementFromImageElement } from './create-canvas-element-from-image-element.js'
import { createImageElementFromBytesAsync } from './create-image-element-from-bytes-async.js'

/**
 * Creates an [`HTMLCanvasElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)
 * from the `bytes` of an image.
 *
 * @category Image
 */
export async function createCanvasElementFromBytesAsync(
  bytes: Uint8Array
): Promise<HTMLCanvasElement> {
  const imageElement = await createImageElementFromBytesAsync(bytes)
  return createCanvasElementFromImageElement(imageElement)
}
