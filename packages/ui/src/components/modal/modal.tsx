import { ComponentChild, Fragment, h, JSX, RefObject, render } from 'preact'
import { useEffect, useRef } from 'preact/hooks'

import { IconCross32 } from '../../icons/icon-32/icon-cross-32.js'
import { createClassName } from '../../utilities/create-class-name.js'
import { createFocusTrapKeyDownHandler } from '../../utilities/private/create-focus-trap-key-down-handler.js'
import { getFocusableElements } from '../../utilities/private/get-focusable-elements.js'
import { IconButton } from '../icon-button/icon-button.js'
import { Text } from '../text/text.js'
import styles from './modal.module.css'

export type ModalProps = {
  children: ComponentChild
  closeButtonIcon?: ComponentChild
  closeButtonPosition?: ModalCloseButtonPosition
  open: boolean
  noTransition?: boolean
  onCloseButtonClick?: JSX.MouseEventHandler<HTMLButtonElement>
  onEscapeKeyDown?: (event: KeyboardEvent) => void
  onOverlayClick?: JSX.MouseEventHandler<HTMLDivElement>
  position?: ModalPosition
  title?: string
}
export type ModalCloseButtonPosition = 'left' | 'right'
export type ModalPosition = 'bottom' | 'center' | 'left' | 'right'

const rootElements: Array<HTMLDivElement> = [] // Stack of currently-open modals

export const Modal = function ({
  children,
  closeButtonIcon = <IconCross32 />,
  closeButtonPosition = 'right',
  open,
  noTransition = false,
  onCloseButtonClick,
  onEscapeKeyDown,
  onOverlayClick,
  position = 'center',
  title,
  ...rest
}: ModalProps): null {
  const rootElementRef: RefObject<HTMLDivElement> = useRef(null)
  const previousFocusedElementRef: RefObject<HTMLElement> = useRef(null)

  useEffect(function (): () => void {
    const rootElement = document.createElement('div')
    document.body.appendChild(rootElement)
    rootElementRef.current = rootElement
    return function (): void {
      document.body.removeChild(rootElement)
    }
  }, [])

  useEffect(
    function (): () => void {
      if (rootElementRef.current === null) {
        throw new Error('`rootElementRef.current` is `null`')
      }
      const focusTrapKeyDownHandler = createFocusTrapKeyDownHandler(
        rootElementRef.current
      )
      function handleTabKeyDown(event: KeyboardEvent) {
        if (open === true) {
          focusTrapKeyDownHandler(event)
        }
      }
      window.addEventListener('keydown', handleTabKeyDown)
      return function (): void {
        window.removeEventListener('keydown', handleTabKeyDown)
      }
    },
    [open]
  )

  useEffect(
    function (): () => void {
      function handleEscapeKeyDown(event: KeyboardEvent) {
        if (
          open === false ||
          event.key !== 'Escape' ||
          typeof onEscapeKeyDown === 'undefined' ||
          rootElements[rootElements.length - 1] !== rootElementRef.current
        ) {
          return
        }
        onEscapeKeyDown(event)
      }
      window.addEventListener('keydown', handleEscapeKeyDown)
      return function (): void {
        window.removeEventListener('keydown', handleEscapeKeyDown)
      }
    },
    [open, onEscapeKeyDown]
  )

  useEffect(
    function (): () => void {
      if (rootElementRef.current === null) {
        throw new Error('`rootElementRef.current` is `null`')
      }
      const bodyElement = document.body
      if (open === true) {
        if (rootElements.length === 0) {
          const hasScrollbar = bodyElement.scrollHeight > window.innerHeight
          bodyElement.style.cssText += `position:fixed;overflow-y:${
            hasScrollbar === true ? 'scroll' : 'hidden'
          };width:100%;`
        }
        rootElements.push(rootElementRef.current)
        rootElementRef.current.style.cssText =
          'position:absolute;top:0;left:0;bottom:0;right:0;z-index:1'
        previousFocusedElementRef.current =
          document.activeElement as HTMLElement
        const focusableElements = getFocusableElements(rootElementRef.current)
        if (focusableElements.length > 0) {
          focusableElements[0].focus()
        } else {
          previousFocusedElementRef.current.blur()
        }
      } else {
        if (rootElements.length === 1) {
          bodyElement.style.removeProperty('position')
          bodyElement.style.removeProperty('overflow-y')
          bodyElement.style.removeProperty('width')
        }
        rootElements.pop()
        rootElementRef.current.style.cssText = 'position:static'
      }
      return function (): void {
        if (previousFocusedElementRef.current !== null) {
          previousFocusedElementRef.current.focus()
        }
      }
    },
    [open]
  )

  useEffect(
    function (): void {
      if (rootElementRef.current === null) {
        throw new Error('`rootElementRef.current` is `null`')
      }
      render(
        <Fragment>
          <div
            {...rest}
            class={createClassName([
              styles.modal,
              open === true ? styles.open : null,
              noTransition === true ? styles.noTransition : null,
              styles[position]
            ])}
          >
            {children}
            {typeof onCloseButtonClick === 'undefined' &&
            typeof title === 'undefined' ? null : (
              <div class={styles.topBar}>
                <div class={styles.title}>
                  {typeof title === 'undefined' ? null : (
                    <Text>
                      <strong>{title}</strong>
                    </Text>
                  )}
                </div>
                {typeof onCloseButtonClick === 'undefined' ? null : (
                  <div
                    class={
                      closeButtonPosition === 'left'
                        ? styles.closeButtonLeft
                        : undefined
                    }
                  >
                    <IconButton onClick={onCloseButtonClick}>
                      {closeButtonIcon}
                    </IconButton>
                  </div>
                )}
              </div>
            )}
          </div>
          <div
            class={styles.overlay}
            onClick={
              typeof onOverlayClick === 'undefined' ? undefined : onOverlayClick
            }
          />
        </Fragment>,
        rootElementRef.current
      )
    },
    [
      children,
      closeButtonIcon,
      closeButtonPosition,
      noTransition,
      onCloseButtonClick,
      onOverlayClick,
      open,
      position,
      rest,
      title
    ]
  )

  return null
}
