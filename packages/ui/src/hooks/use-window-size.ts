import { useCallback, useEffect, useRef } from 'preact/hooks'

type ResizeBehaviorOnDoubleClick = 'minimize' | 'maximize'
type ResizeDirection = 'both' | 'horizontal' | 'vertical'

const mapResizeDirectionToStyles: Record<
  ResizeDirection,
  { cursor: string; height: string; width: string }
> = {
  both: {
    cursor: 'nwse-resize',
    height: '12px',
    width: '12px'
  },
  horizontal: {
    cursor: 'ew-resize',
    height: '100%',
    width: '8px'
  },
  vertical: {
    cursor: 'ns-resize',
    height: '8px',
    width: '100%'
  }
}

export function useWindowSize(
  onWindowResize: (size: { width: number; height: number }) => void,
  options: {
    maxHeight?: number
    maxWidth?: number
    minHeight?: number
    minWidth?: number
    resizeBehaviorOnDoubleClick?: ResizeBehaviorOnDoubleClick
    resizeDirection?: ResizeDirection
  } = {}
): (size: { width: number; height: number }) => void {
  const initialHeight = window.innerHeight
  const initialWidth = window.innerWidth

  const resizeBehaviorOnDoubleClick =
    typeof options.resizeBehaviorOnDoubleClick === 'undefined'
      ? null
      : options.resizeBehaviorOnDoubleClick
  const maxHeight =
    typeof options.maxHeight === 'undefined'
      ? Number.MAX_VALUE
      : options.maxHeight
  const maxWidth =
    typeof options.maxWidth === 'undefined'
      ? Number.MAX_VALUE
      : options.maxWidth
  const minHeight =
    typeof options.minHeight === 'undefined' ? initialHeight : options.minHeight
  const minWidth =
    typeof options.minWidth === 'undefined' ? initialWidth : options.minWidth
  const resizeDirection =
    typeof options.resizeDirection === 'undefined'
      ? 'both'
      : options.resizeDirection

  const windowSize = useRef({
    height: initialHeight,
    width: initialWidth
  })

  const setWindowSize = useCallback(
    function ({ width, height }: { width?: number; height?: number }) {
      if (typeof width === 'undefined' && typeof height === 'undefined') {
        throw new Error('Need at least one of `width` or `height`')
      }
      if (typeof width !== 'undefined') {
        windowSize.current.width = Math.min(maxWidth, Math.max(minWidth, width))
      }
      if (typeof height !== 'undefined') {
        windowSize.current.height = Math.min(
          maxHeight,
          Math.max(minHeight, height)
        )
      }
      onWindowResize(windowSize.current)
    },
    [maxHeight, maxWidth, minHeight, minWidth, onWindowResize]
  )

  const toggleWindowSize = useCallback(
    function (resizeDirection: ResizeDirection) {
      if (resizeDirection === 'both' || resizeDirection === 'horizontal') {
        if (windowSize.current.width !== initialWidth) {
          windowSize.current.width = initialWidth
        } else {
          windowSize.current.width =
            resizeBehaviorOnDoubleClick === 'minimize' ? minWidth : maxWidth
        }
      }
      if (resizeDirection === 'both' || resizeDirection === 'vertical') {
        if (windowSize.current.height !== initialHeight) {
          windowSize.current.height = initialHeight
        } else {
          windowSize.current.height =
            resizeBehaviorOnDoubleClick === 'minimize' ? minHeight : maxHeight
        }
      }
      onWindowResize(windowSize.current)
    },
    [
      resizeBehaviorOnDoubleClick,
      initialHeight,
      initialWidth,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      onWindowResize
    ]
  )

  useEffect(
    function () {
      const removeResizeHandleElements: Array<() => void> = []
      const options = {
        resizeDirection,
        setWindowSize,
        toggleWindowSize:
          resizeBehaviorOnDoubleClick === null ? null : toggleWindowSize
      }
      if (resizeDirection === 'both') {
        removeResizeHandleElements.push(
          createResizeHandleElement({
            ...options,
            resizeDirection: 'horizontal'
          })
        )
        removeResizeHandleElements.push(
          createResizeHandleElement({ ...options, resizeDirection: 'vertical' })
        )
      }
      removeResizeHandleElements.push(createResizeHandleElement(options))
      return function () {
        for (const removeResizeHandleElement of removeResizeHandleElements) {
          removeResizeHandleElement()
        }
      }
    },
    [
      maxHeight,
      maxWidth,
      minHeight,
      maxHeight,
      resizeBehaviorOnDoubleClick,
      resizeDirection,
      setWindowSize,
      toggleWindowSize
    ]
  )

  return setWindowSize
}

function createResizeHandleElement(options: {
  resizeDirection: ResizeDirection
  setWindowSize: (windowSize: { width?: number; height?: number }) => void
  toggleWindowSize: null | ((resizeDirection: ResizeDirection) => void)
}): () => void {
  const { resizeDirection, setWindowSize, toggleWindowSize } = options

  const resizeHandleElement = document.createElement('div')
  document.body.append(resizeHandleElement)
  const { cursor, height, width } = mapResizeDirectionToStyles[resizeDirection]
  resizeHandleElement.style.cssText = `cursor: ${cursor}; position: fixed; z-index: var(--z-index-2); bottom: 0; right: 0; width: ${width}; height: ${height};`

  let pointerDownCursorPosition: null | { x: number; y: number } = null
  resizeHandleElement.addEventListener(
    'pointerdown',
    function (event: PointerEvent) {
      pointerDownCursorPosition = {
        x: event.offsetX,
        y: event.offsetY
      }
      resizeHandleElement.setPointerCapture(event.pointerId)
    }
  )
  resizeHandleElement.addEventListener(
    'pointerup',
    function (event: PointerEvent) {
      pointerDownCursorPosition = null
      resizeHandleElement.releasePointerCapture(event.pointerId)
    }
  )
  resizeHandleElement.addEventListener(
    'pointermove',
    function (event: PointerEvent) {
      if (pointerDownCursorPosition === null) {
        return
      }
      const width =
        resizeDirection === 'both' || resizeDirection === 'horizontal'
          ? Math.round(
              event.clientX +
                (resizeHandleElement.offsetWidth - pointerDownCursorPosition.x)
            )
          : undefined
      const height =
        resizeDirection === 'both' || resizeDirection === 'vertical'
          ? Math.round(
              event.clientY +
                (resizeHandleElement.offsetHeight - pointerDownCursorPosition.y)
            )
          : undefined
      setWindowSize({ height, width })
    }
  )
  if (toggleWindowSize !== null) {
    resizeHandleElement.addEventListener('dblclick', function () {
      toggleWindowSize(resizeDirection)
    })
  }

  return function () {
    resizeHandleElement.remove()
  }
}
