import { useCallback, useEffect, useRef } from 'preact/hooks'

export function useWindowSize(
  onWindowResize: (size: { width: number; height: number }) => void,
  options?: {
    maxHeight?: number
    maxWidth?: number
    minHeight?: number
    minWidth?: number
    direction?: 'horizontal' | 'vertical'
  }
): {
  setWindowSize: (size: { width: number; height: number }) => void
} {
  const size = useRef({ height: window.innerHeight, width: window.innerWidth })
  const setWindowSize = useCallback(
    ({ width, height }: { width: number; height: number }) => {
      if (!options?.direction || options.direction === 'vertical')
        size.current.height = Math.min(
          options?.maxHeight || Infinity,
          Math.max(options?.minHeight || 0, height)
        )
      if (!options?.direction || options.direction === 'horizontal')
        size.current.width = Math.min(
          options?.maxWidth || Infinity,
          Math.max(options?.minWidth || 0, width)
        )
      onWindowResize(size.current)
    },
    [
      onWindowResize,
      options?.maxHeight,
      options?.maxWidth,
      options?.minHeight,
      options?.minWidth,
      options?.direction
    ]
  )

  const handleResize:
    | ((this: GlobalEventHandlers, e: PointerEvent) => void)
    | null = useCallback(
    function (this: GlobalEventHandlers, e: PointerEvent) {
      setWindowSize({
        height: Math.floor(e.clientY + 5),
        width: Math.floor(e.clientX + 5)
      })
    },
    [setWindowSize]
  )

  useEffect(() => {
    const resizeHandle = document.createElement('div')
    document.body.append(resizeHandle)
    resizeHandle.style.cssText = `
      cursor: ${
        !options?.direction
          ? 'nwse-resize'
          : options?.direction === 'horizontal'
          ? 'ew-resize'
          : 'ns-resize'
      };
      position: fixed;
      z-index: 100;
      bottom: 0;
      right: 0;
      width: 10px;
      height: 10px;
      background: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='5.40839' y1='9.40645' x2='9.40839' y2='5.40645' stroke='%23666666'/%3E%3Cline x1='1.77164' y1='9.40646' x2='9.4084' y2='1.7697' stroke='%23666666'/%3E%3C/svg%3E%0A")
    `

    resizeHandle.onpointerdown = (e) => {
      resizeHandle.onpointermove = handleResize
      resizeHandle.setPointerCapture(e.pointerId)
    }
    resizeHandle.onpointerup = (e) => {
      if (resizeHandle) {
        resizeHandle.onpointermove = null
        resizeHandle.releasePointerCapture(e.pointerId)
      }
    }
    return function () {
      resizeHandle.remove()
    }
  }, [handleResize, options?.direction])
  return { setWindowSize }
}
