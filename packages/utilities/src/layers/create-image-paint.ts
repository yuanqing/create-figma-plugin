export function createImagePaint (bytes) {
  const image = figma.createImage(bytes)
  return {
    type: 'IMAGE',
    visible: true,
    opacity: 1,
    blendMode: 'NORMAL',
    scaleMode: 'FILL',
    imageTransform: [
      [1, 0, 0],
      [0, 1, 0]
    ],
    scalingFactor: 0.5,
    filters: {
      exposure: 0,
      contrast: 0,
      saturation: 0,
      temperature: 0,
      tint: 0,
      highlights: 0,
      shadows: 0
    },
    imageHash: image.hash
  }
}
