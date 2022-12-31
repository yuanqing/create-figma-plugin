/**
 * Creates an [`HTMLImageElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)
 * from a [`blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob)
 * representing an image.
 *
 * @category Image
 */
export async function createImageElementFromBlobAsync(
  blob: Blob
): Promise<HTMLImageElement> {
  return new Promise<HTMLImageElement>(function (resolve, reject) {
    const imageElement = new Image()
    imageElement.onload = function () {
      resolve(imageElement)
    }
    imageElement.onerror = reject
    imageElement.src = URL.createObjectURL(blob)
  })
}
