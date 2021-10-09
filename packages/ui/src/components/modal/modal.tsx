/** @jsx h */
import { ComponentChild, Fragment, h, JSX, RefObject, render } from 'preact'
import { useEffect, useRef } from 'preact/hooks'

import { createClassName } from '../../utilities/create-class-name'
import { createFocusTrapKeyDownHandler } from '../../utilities/private/create-focus-trap-key-down-handler'
import { getFocusableElements } from '../../utilities/private/get-focusable-elements'
import { IconCross32 } from '../icon/icon-32/icon-cross-32'
import { Text } from '../text/text'
import styles from './modal.css'

export type ModalProps = {
  children: ComponentChild
  closeButtonIcon?: ComponentChild
  closeButtonPosition?: ModalCloseButtonPosition
  onCloseButtonClick?: JSX.MouseEventHandler<HTMLButtonElement>
  onEscapeKeyDown?: (event: KeyboardEvent) => void
  onOverlayClick?: JSX.MouseEventHandler<HTMLDivElement>
  isOpen: boolean
  position?: ModalPosition
  title?: string
}
export type ModalCloseButtonPosition = 'left' | 'right'
export type ModalPosition = 'bottom' | 'center' | 'left' | 'right'

export function Modal({
  children,
  closeButtonIcon = <IconCross32 />,
  closeButtonPosition = 'right',
  isOpen,
  onCloseButtonClick,
  onEscapeKeyDown,
  onOverlayClick,
  position = 'center',
  title,
  ...rest
}: ModalProps): null {
  const rootElementRef: RefObject<HTMLDivElement> = useRef(null)
  const previousFocusedElementRef: RefObject<HTMLElement> = useRef(null)

  useEffect(function () {
    const rootElement = document.createElement('div')
    document.body.appendChild(rootElement)
    rootElementRef.current = rootElement
    return function () {
      document.body.removeChild(rootElement)
    }
  }, [])

  useEffect(
    function () {
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
              styles[position]
            ])}
          >
            <div {...rest} class={styles.children}>
              {children}
            </div>
            {typeof onCloseButtonClick === 'undefined' &&
            typeof title === 'undefined' ? null : (
              <div class={styles.topBar}>
                <div class={styles.title}>
                  {typeof title === 'undefined' ? null : (
                    <Text bold>{title}</Text>
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

      function handleEscapeKeyDown(event: KeyboardEvent) {
        if (event.key !== 'Escape' || typeof onEscapeKeyDown === 'undefined') {
          return
        }
        onEscapeKeyDown(event)
      }
      const handleTabKeyDown = createFocusTrapKeyDownHandler(
        rootElementRef.current
      )
      if (isOpen === true) {
        window.addEventListener('keydown', handleEscapeKeyDown)
        window.addEventListener('keydown', handleTabKeyDown)
        previousFocusedElementRef.current =
          document.activeElement as HTMLElement
        const focusableElements = getFocusableElements(rootElementRef.current)
        if (focusableElements.length > 0) {
          focusableElements[0].focus()
        } else {
          previousFocusedElementRef.current.blur()
        }
      }
      return function (): void {
        if (isOpen === true) {
          window.removeEventListener('keydown', handleEscapeKeyDown)
          window.removeEventListener('keydown', handleTabKeyDown)
          if (previousFocusedElementRef.current !== null) {
            previousFocusedElementRef.current.focus()
          }
        }
      }
    },
    [
      children,
      closeButtonIcon,
      closeButtonPosition,
      isOpen,
      onCloseButtonClick,
      onEscapeKeyDown,
      onOverlayClick,
      position,
      rest,
      title
    ]
  )

  return null
}
