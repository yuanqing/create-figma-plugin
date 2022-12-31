import { createCanvasElementFromImageElement } from './create-canvas-element-from-image-element.js'
import { createImageElementFromBlobAsync } from './create-image-element-from-blob-async.js'

/**
 * Creates an [`HTMLCanvasElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)
 * from a [`blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob)
 * representing an image.
 *
 * @category Image
 */
export async function createCanvasElementFromBlobAsync(
  blob: Blob
): Promise<HTMLCanvasElement> {
  const imageElement = await createImageElementFromBlobAsync(blob)
  return createCanvasElementFromImageElement(imageElement)
}
