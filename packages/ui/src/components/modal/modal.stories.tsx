/** @jsx h */
import { Fragment, h } from 'preact'
import { useState } from 'preact/hooks'

import { Button } from '../button/button'
import { IconReturn32 } from '../icon/icon-32/icon-return-32'
import { Modal } from './modal'

export default { title: 'Components/Modal' }

export const Default = function () {
  const [isOpen, setIsOpen] = useState(false)
  function handleOpenButtonClick() {
    setIsOpen(true)
  }
  function handleCloseButtonClick() {
    setIsOpen(false)
  }
  const style = { height: '160px', padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button fullWidth onClick={handleOpenButtonClick}>
        Open
      </Button>
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

export const PositionBottom = function () {
  const [isOpen, setIsOpen] = useState(false)
  function handleOpenButtonClick() {
    setIsOpen(true)
  }
  function handleCloseButtonClick() {
    setIsOpen(false)
  }
  const style = { height: '160px', padding: '12px' }
  return (
    <Fragment>
      <Button fullWidth onClick={handleOpenButtonClick}>
        Open
      </Button>
      <Modal isOpen={isOpen} position="bottom">
        <div style={style}>
          <Button onClick={handleCloseButtonClick} secondary>
            Close
          </Button>
        </div>
      </Modal>
    </Fragment>
  )
}

export const PositionLeft = function () {
  const [isOpen, setIsOpen] = useState(false)
  function handleOpenButtonClick() {
    setIsOpen(true)
  }
  function handleCloseButtonClick() {
    setIsOpen(false)
  }
  const style = { padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button fullWidth onClick={handleOpenButtonClick}>
        Open
      </Button>
      <Modal isOpen={isOpen} position="left">
        <div style={style}>
          <Button onClick={handleCloseButtonClick} secondary>
            Close
          </Button>
        </div>
      </Modal>
    </Fragment>
  )
}

export const PositionRight = function () {
  const [isOpen, setIsOpen] = useState(false)
  function handleOpenButtonClick() {
    setIsOpen(true)
  }
  function handleCloseButtonClick() {
    setIsOpen(false)
  }
  const style = { padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button fullWidth onClick={handleOpenButtonClick}>
        Open
      </Button>
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

export const CloseOnOverlayClick = function () {
  const [isOpen, setIsOpen] = useState(false)
  function handleOpenButtonClick() {
    setIsOpen(true)
  }
  function handleOverlayClick() {
    setIsOpen(false)
  }
  const style = { height: '160px', padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button fullWidth onClick={handleOpenButtonClick}>
        Open
      </Button>
      <Modal isOpen={isOpen} onOverlayClick={handleOverlayClick}>
        <div style={style}>foo</div>
      </Modal>
    </Fragment>
  )
}

export const CloseOnEscapeKeyDown = function () {
  const [isOpen, setIsOpen] = useState(false)
  function handleOpenButtonClick() {
    setIsOpen(true)
  }
  function handleEscapeKeyDown() {
    setIsOpen(false)
  }
  const style = { height: '160px', padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button fullWidth onClick={handleOpenButtonClick}>
        Open
      </Button>
      <Modal isOpen={isOpen} onEscapeKeyDown={handleEscapeKeyDown}>
        <div style={style}>foo</div>
      </Modal>
    </Fragment>
  )
}

export const Title = function () {
  const [isOpen, setIsOpen] = useState(false)
  function handleOpenButtonClick() {
    setIsOpen(true)
  }
  function handleCloseButtonClick() {
    setIsOpen(false)
  }
  const style = { height: '160px', padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button fullWidth onClick={handleOpenButtonClick}>
        Open
      </Button>
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
  const [isOpen, setIsOpen] = useState(false)
  function handleOpenButtonClick() {
    setIsOpen(true)
  }
  function handleCloseButtonClick() {
    setIsOpen(false)
  }
  const style = { height: '160px', padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button fullWidth onClick={handleOpenButtonClick}>
        Open
      </Button>
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

export const CloseButtonPosition = function () {
  const [isOpen, setIsOpen] = useState(false)
  function handleOpenButtonClick() {
    setIsOpen(true)
  }
  function handleCloseButtonClick() {
    setIsOpen(false)
  }
  const style = { height: '160px', padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button fullWidth onClick={handleOpenButtonClick}>
        Open
      </Button>
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

export const CloseButtonIcon = function () {
  const [isOpen, setIsOpen] = useState(false)
  function handleOpenButtonClick() {
    setIsOpen(true)
  }
  function handleCloseButtonClick() {
    setIsOpen(false)
  }
  const style = { height: '160px', padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button fullWidth onClick={handleOpenButtonClick}>
        Open
      </Button>
      <Modal
        closeButtonIcon={<IconReturn32 />}
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
