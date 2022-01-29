export type DropEventHandler = {
  name: string
  handler: (vector: Vector, ...args: any) => void
}

function factory(once: boolean) {
  return function onDrop<Handler extends DropEventHandler>(
    name: Handler['name'],
    handler: Handler['handler']
  ): () => void {
    function callback(event: DropEvent): boolean {
      if (event.dropMetadata.name !== name) {
        return true
      }
      handler(
        {
          x: event.absoluteX,
          y: event.absoluteY
        },
        ...event.dropMetadata.args
      )
      return false
    }
    if (once === true) {
      figma.once('drop', callback)
    } else {
      figma.on('drop', callback)
    }
    return function () {
      figma.off('drop', callback)
    }
  }
}
export const onDrop = factory(false)
export const onceDrop = factory(true)

export function emitDrop<Handler extends DropEventHandler>(
  name: Handler['name'],
  ...args: Parameters<Handler['handler']>
): void {
  const [vector, ...rest] = args
  window.parent.postMessage(
    {
      pluginDrop: {
        clientX: vector.x,
        clientY: vector.y,
        dropMetadata: { args: rest, name },
        files: []
      }
    },
    '*'
  )
}
