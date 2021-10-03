/** @jsx h */
import { ComponentChild, Fragment, h, JSX, RefObject, render } from 'preact'
import { useEffect, useRef } from 'preact/hooks'

import { createClassName } from '../../utilities/create-class-name'
import { IconCross32 } from '../icon/icon-32/icon-cross-32'
import { Text } from '../text/text'
import styles from './modal.css'

export type ModalProps = {
  children: ComponentChild
  closeButtonIcon?: ComponentChild
  closeButtonPosition?: ModalCloseButtonPosition
  onOverlayClick?: JSX.MouseEventHandler<HTMLElement>
  onCloseButtonClick?: JSX.MouseEventHandler<HTMLElement>
  position?: ModalPosition
  title?: string
  isOpen: boolean
}
export type ModalCloseButtonPosition = 'left' | 'right'
export type ModalPosition = 'bottom' | 'center' | 'left' | 'right'

export function Modal({
  children,
  closeButtonIcon = <IconCross32 />,
  closeButtonPosition = 'right',
  onCloseButtonClick,
  onOverlayClick,
  position = 'center',
  title,
  isOpen,
  ...rest
}: ModalProps): null {
  const rootElementRef: RefObject<HTMLDivElement> = useRef(null)

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
            className={createClassName([
              styles.modal,
              isOpen === true ? styles.visible : null,
              styles[position]
            ])}
          >
            {typeof onCloseButtonClick === 'undefined' &&
            typeof title === 'undefined' ? null : (
              <div className={styles.topBar}>
                <div className={styles.title}>
                  {typeof title === 'undefined' ? null : (
                    <Text bold>{title}</Text>
                  )}
                </div>
                {typeof onCloseButtonClick === 'undefined' ? null : (
                  <button
                    className={createClassName([
                      styles.closeButton,
                      closeButtonPosition === 'left'
                        ? styles.closeButtonLeft
                        : null
                    ])}
                    onClick={onCloseButtonClick}
                  >
                    <div className={styles.closeButtonBorder} />
                    {closeButtonIcon}
                  </button>
                )}
              </div>
            )}
            <div {...rest} className={styles.children}>
              {children}
            </div>
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
      onCloseButtonClick,
      onOverlayClick,
      position,
      rest,
      title
    ]
  )

  return null
}
