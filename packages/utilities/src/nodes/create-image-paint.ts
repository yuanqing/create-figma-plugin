export function createImagePaint (bytes: Uint8Array): ImagePaint {
  const image = figma.createImage(bytes)
  return {
    type: 'IMAGE',
    scaleMode: 'FILL',
    imageHash: image.hash,
    scalingFactor: 0.5
  }
}
