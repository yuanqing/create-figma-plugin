import { ComponentChild, h, RefObject, render } from 'preact'
import { useEffect, useRef } from 'preact/hooks'

import { IconCross32 } from '../../icons/icon-32/icon-cross-32.js'
import { EventHandler } from '../../types/event-handler.js'
import { createClassName } from '../../utilities/create-class-name.js'
import { createComponent } from '../../utilities/create-component.js'
import { getCurrentFromRef } from '../../utilities/get-current-from-ref.js'
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
  transition?: boolean
  onCloseButtonClick?: EventHandler.onClick<HTMLButtonElement>
  onEscapeKeyDown?: (event: KeyboardEvent) => void
  onOverlayClick?: EventHandler.onClick<HTMLDivElement>
  position?: ModalPosition
  title?: string
}

export type ModalCloseButtonPosition = 'left' | 'right'
export type ModalPosition = 'bottom' | 'center' | 'left' | 'right'

export const Modal = createComponent<HTMLDivElement, ModalProps>(function (
  {
    children,
    closeButtonIcon = <IconCross32 />,
    closeButtonPosition = 'right',
    open,
    transition = true,
    onCloseButtonClick,
    onEscapeKeyDown,
    onOverlayClick,
    position = 'center',
    title,
    ...rest
  },
  ref
): null {
  const portalElementRef: RefObject<HTMLDivElement> = useRef(null)
  const modalElementsRef: RefObject<Array<HTMLDivElement>> = useRef([]) // Stack of currently-open modals
  const previousFocusedElementRef: RefObject<HTMLElement> = useRef(null)

  useEffect(function () {
    const portalElement = document.createElement('div')
    document.body.appendChild(portalElement)
    portalElementRef.current = portalElement
    return function () {
      document.body.removeChild(portalElement)
    }
  }, [])

  useEffect(
    function () {
      const portalElement = getCurrentFromRef<HTMLDivElement>(portalElementRef)
      const focusTrapKeyDownHandler =
        createFocusTrapKeyDownHandler(portalElement)
      function handleTabKeyDown(event: KeyboardEvent) {
        if (open === true) {
          focusTrapKeyDownHandler(event)
        }
      }
      window.addEventListener('keydown', handleTabKeyDown)
      return function () {
        window.removeEventListener('keydown', handleTabKeyDown)
      }
    },
    [open]
  )

  useEffect(
    function () {
      function handleEscapeKeyDown(event: KeyboardEvent) {
        const modalElements =
          getCurrentFromRef<Array<HTMLDivElement>>(modalElementsRef)
        const portalElement =
          getCurrentFromRef<HTMLDivElement>(portalElementRef)
        if (
          open === false ||
          event.key !== 'Escape' ||
          typeof onEscapeKeyDown === 'undefined' ||
          modalElements[modalElements.length - 1] !== portalElement
        ) {
          return
        }
        onEscapeKeyDown(event)
      }
      window.addEventListener('keydown', handleEscapeKeyDown)
      return function () {
        window.removeEventListener('keydown', handleEscapeKeyDown)
      }
    },
    [open, onEscapeKeyDown]
  )

  useEffect(
    function () {
      const modalElements =
        getCurrentFromRef<Array<HTMLDivElement>>(modalElementsRef)
      const portalElement = getCurrentFromRef<HTMLDivElement>(portalElementRef)
      const bodyElement = document.body
      if (open === true) {
        if (modalElements.length === 0) {
          const hasScrollbar = bodyElement.scrollHeight > window.innerHeight
          bodyElement.style.cssText += `position:fixed;overflow-y:${
            hasScrollbar === true ? 'scroll' : 'hidden'
          };width:100%;`
        }
        modalElements.push(portalElement)
        portalElement.style.cssText =
          'position:absolute;top:0;left:0;bottom:0;right:0;z-index:1'
        previousFocusedElementRef.current =
          document.activeElement as HTMLElement
        const focusableElements = getFocusableElements(portalElement)
        if (focusableElements.length > 0) {
          focusableElements[0].focus()
        } else {
          previousFocusedElementRef.current.blur()
        }
      } else {
        if (modalElements.length === 1) {
          bodyElement.style.removeProperty('position')
          bodyElement.style.removeProperty('overflow-y')
          bodyElement.style.removeProperty('width')
        }
        modalElements.pop()
        portalElement.style.cssText = 'position:static'
      }
      return function () {
        if (previousFocusedElementRef.current !== null) {
          previousFocusedElementRef.current.focus()
        }
      }
    },
    [open]
  )

  useEffect(
    function () {
      const portalElement = getCurrentFromRef<HTMLDivElement>(portalElementRef)
      render(
        <div ref={ref}>
          <div
            {...rest}
            class={createClassName([
              styles.modal,
              open === true ? styles.open : null,
              transition === false ? styles.noTransition : null,
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
        </div>,
        portalElement
      )
    },
    [
      children,
      closeButtonIcon,
      closeButtonPosition,
      onCloseButtonClick,
      onOverlayClick,
      open,
      position,
      ref,
      rest,
      title,
      transition
    ]
  )

  return null
})
