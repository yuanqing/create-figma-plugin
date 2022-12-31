/**
 * Read the bytes off an [`HTMLCanvasElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement).
 *
 * @category Image
 */
export async function readBytesFromCanvasElementAsync(
  canvasElement: HTMLCanvasElement
): Promise<Uint8Array> {
  return new Promise<Uint8Array>(function (resolve, reject) {
    canvasElement.toBlob(function (blob: null | Blob) {
      const reader = new FileReader()
      reader.onload = function () {
        resolve(new Uint8Array(reader.result as ArrayBuffer))
      }
      reader.onerror = reject
      reader.readAsArrayBuffer(blob as Blob)
    })
  })
}
