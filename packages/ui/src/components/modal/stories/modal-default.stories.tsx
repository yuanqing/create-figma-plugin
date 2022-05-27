/** @jsx h */
import { Fragment, h } from 'preact'
import { useState } from 'preact/hooks'

import { Button } from '../../button/button'
import { IconChevronDown32 } from '../../icon/icon-32/icon-chevron-down-32'
import { Modal } from '../modal'

export default {
  parameters: {
    order: 1
  },
  title: 'Components/Modal/Default'
}

export const Default = function () {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  function handleOpenButtonClick() {
    setIsOpen(true)
  }
  function handleCloseButtonClick() {
    setIsOpen(false)
  }
  const style = { height: '160px', padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal isOpen={isOpen}>
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
  const style = { height: '160px', padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal isOpen={isOpen} noTransition>
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
  const style = { height: '160px', padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal isOpen={isOpen} onOverlayClick={handleOverlayClick}>
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
  const style = { height: '160px', padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal isOpen={isOpen} onEscapeKeyDown={handleEscapeKeyDown}>
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
  const style = { height: '160px', padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal isOpen={isOpen} title="foo">
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
  const style = { height: '160px', padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal
        isOpen={isOpen}
        onCloseButtonClick={handleCloseButtonClick}
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
  const style = { height: '160px', padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal
        closeButtonIcon={<IconChevronDown32 />}
        isOpen={isOpen}
        onCloseButtonClick={handleCloseButtonClick}
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
  const style = { height: '160px', padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal
        closeButtonPosition="left"
        isOpen={isOpen}
        onCloseButtonClick={handleCloseButtonClick}
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
  const parentStyle = { height: '160px', padding: '12px', width: '240px' }
  const [isChildOpen, setIsChildOpen] = useState<boolean>(false)
  function handleChildOpenButtonClick() {
    setIsChildOpen(true)
  }
  function handleChildCloseButtonClick() {
    setIsChildOpen(false)
  }
  const childStyle = { height: '120px', padding: '12px', width: '160px' }
  return (
    <Fragment>
      <Button onClick={handleParentOpenButtonClick}>Open parent modal</Button>
      <Modal
        isOpen={isParentOpen}
        onCloseButtonClick={handleParentCloseButtonClick}
        onEscapeKeyDown={handleParentCloseButtonClick}
        title="Parent"
      >
        <div style={parentStyle}>
          <Button onClick={handleChildOpenButtonClick}>Open child modal</Button>
          <Modal
            isOpen={isChildOpen}
            onCloseButtonClick={handleChildCloseButtonClick}
            onEscapeKeyDown={handleChildCloseButtonClick}
            title="Child"
          >
            <div style={childStyle} />
          </Modal>
        </div>
      </Modal>
    </Fragment>
  )
}
