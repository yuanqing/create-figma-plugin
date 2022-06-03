/** @jsx h */
import { ComponentChild, Fragment, h, JSX, RefObject, render } from 'preact'
import { useEffect, useRef } from 'preact/hooks'

import { IconCross32 } from '../../icons/icon-32/icon-cross-32'
import { createClassName } from '../../utilities/create-class-name'
import { createFocusTrapKeyDownHandler } from '../../utilities/private/create-focus-trap-key-down-handler'
import { getFocusableElements } from '../../utilities/private/get-focusable-elements'
import { Text } from '../text/text'
import styles from './modal.css'

export type ModalProps = {
  children: ComponentChild
  closeButtonIcon?: ComponentChild
  closeButtonPosition?: ModalCloseButtonPosition
  isOpen: boolean
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

export function Modal({
  children,
  closeButtonIcon = <IconCross32 />,
  closeButtonPosition = 'right',
  isOpen,
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
        if (isOpen === true) {
          focusTrapKeyDownHandler(event)
        }
      }
      window.addEventListener('keydown', handleTabKeyDown)
      return function (): void {
        window.removeEventListener('keydown', handleTabKeyDown)
      }
    },
    [isOpen]
  )

  useEffect(
    function (): () => void {
      function handleEscapeKeyDown(event: KeyboardEvent) {
        if (
          isOpen === false ||
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
    [isOpen, onEscapeKeyDown]
  )

  useEffect(
    function (): () => void {
      if (rootElementRef.current === null) {
        throw new Error('`rootElementRef.current` is `null`')
      }
      if (isOpen === true) {
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
        rootElements.pop()
        rootElementRef.current.style.cssText = 'position:static'
      }
      return function (): void {
        if (previousFocusedElementRef.current !== null) {
          previousFocusedElementRef.current.focus()
        }
      }
    },
    [isOpen]
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
              isOpen === true ? styles.isOpen : null,
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
                  <button
                    class={createClassName([
                      styles.closeButton,
                      closeButtonPosition === 'left'
                        ? styles.closeButtonLeft
                        : null
                    ])}
                    onClick={onCloseButtonClick}
                    tabIndex={1}
                  >
                    <div class={styles.closeButtonBorder} />
                    {closeButtonIcon}
                  </button>
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
      isOpen,
      noTransition,
      onCloseButtonClick,
      onOverlayClick,
      position,
      rest,
      title
    ]
  )

  return null
}
