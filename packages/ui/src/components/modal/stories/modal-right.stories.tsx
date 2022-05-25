/** @jsx h */
import { Fragment, h } from 'preact'
import { useState } from 'preact/hooks'

import { Button } from '../../button/button'
import { IconChevronRight32 } from '../../icon/icon-32/icon-chevron-right-32'
import { Modal } from '../modal'

export default {
  parameters: {
    fixedWidth: false,
    order: 4
  },
  title: 'Components/Modal/Right'
}

export const Default = function () {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  function handleOpenButtonClick() {
    setIsOpen(true)
  }
  function handleCloseButtonClick() {
    setIsOpen(false)
  }
  const style = { padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal isOpen={isOpen} position="right">
        <div style={style}>
          <Button onClick={handleCloseButtonClick} secondary>
            Close
          </Button>
        </div>
      </Modal>
    </Fragment>
  )
}

export const NoTransition = function () {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  function handleOpenButtonClick() {
    setIsOpen(true)
  }
  function handleCloseButtonClick() {
    setIsOpen(false)
  }
  const style = { padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal isOpen={isOpen} noTransition position="right">
        <div style={style}>
          <Button onClick={handleCloseButtonClick} secondary>
            Close
          </Button>
        </div>
      </Modal>
    </Fragment>
  )
}

export const CloseOnOverlayClick = function () {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  function handleOpenButtonClick() {
    setIsOpen(true)
  }
  function handleOverlayClick() {
    setIsOpen(false)
  }
  const style = { padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal
        isOpen={isOpen}
        onOverlayClick={handleOverlayClick}
        position="right"
      >
        <div style={style}>foo</div>
      </Modal>
    </Fragment>
  )
}

export const CloseOnEscapeKeyDown = function () {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  function handleOpenButtonClick() {
    setIsOpen(true)
  }
  function handleEscapeKeyDown() {
    setIsOpen(false)
  }
  const style = { padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal
        isOpen={isOpen}
        onEscapeKeyDown={handleEscapeKeyDown}
        position="right"
      >
        <div style={style}>foo</div>
      </Modal>
    </Fragment>
  )
}

export const Title = function () {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  function handleOpenButtonClick() {
    setIsOpen(true)
  }
  function handleCloseButtonClick() {
    setIsOpen(false)
  }
  const style = { padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal isOpen={isOpen} position="right" title="foo">
        <div style={style}>
          <Button onClick={handleCloseButtonClick} secondary>
            Close
          </Button>
        </div>
      </Modal>
    </Fragment>
  )
}

export const CloseButton = function () {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  function handleOpenButtonClick() {
    setIsOpen(true)
  }
  function handleCloseButtonClick() {
    setIsOpen(false)
  }
  const style = { padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal
        isOpen={isOpen}
        onCloseButtonClick={handleCloseButtonClick}
        position="right"
        title="foo"
      >
        <div style={style}>bar</div>
      </Modal>
    </Fragment>
  )
}

export const CloseButtonIcon = function () {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  function handleOpenButtonClick() {
    setIsOpen(true)
  }
  function handleCloseButtonClick() {
    setIsOpen(false)
  }
  const style = { padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal
        closeButtonIcon={<IconChevronRight32 />}
        isOpen={isOpen}
        onCloseButtonClick={handleCloseButtonClick}
        position="right"
        title="foo"
      >
        <div style={style}>bar</div>
      </Modal>
    </Fragment>
  )
}

export const CloseButtonPositionLeft = function () {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  function handleOpenButtonClick() {
    setIsOpen(true)
  }
  function handleCloseButtonClick() {
    setIsOpen(false)
  }
  const style = { padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal
        closeButtonPosition="right"
        isOpen={isOpen}
        onCloseButtonClick={handleCloseButtonClick}
        position="right"
        title="foo"
      >
        <div style={style}>bar</div>
      </Modal>
    </Fragment>
  )
}

export const Nested = function () {
  const [isParentOpen, setIsParentOpen] = useState<boolean>(false)
  function handleParentOpenButtonClick() {
    setIsParentOpen(true)
  }
  function handleParentCloseButtonClick() {
    setIsParentOpen(false)
  }
  const parentStyle = { padding: '12px', width: '240px' }
  const [isChildOpen, setIsChildOpen] = useState<boolean>(false)
  function handleChildOpenButtonClick() {
    setIsChildOpen(true)
  }
  function handleChildCloseButtonClick() {
    setIsChildOpen(false)
  }
  const childStyle = { padding: '12px', width: '160px' }
  return (
    <Fragment>
      <Button onClick={handleParentOpenButtonClick}>Open parent modal</Button>
      <Modal
        isOpen={isParentOpen}
        onCloseButtonClick={handleParentCloseButtonClick}
        onEscapeKeyDown={handleParentCloseButtonClick}
        position="right"
        title="Parent"
      >
        <div style={parentStyle}>
          <Button onClick={handleChildOpenButtonClick}>Open child modal</Button>
          <Modal
            isOpen={isChildOpen}
            onCloseButtonClick={handleChildCloseButtonClick}
            onEscapeKeyDown={handleChildCloseButtonClick}
            position="right"
            title="Child"
          >
            <div style={childStyle} />
          </Modal>
        </div>
      </Modal>
    </Fragment>
  )
}
