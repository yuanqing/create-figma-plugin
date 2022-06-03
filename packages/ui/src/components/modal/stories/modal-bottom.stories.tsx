/** @jsx h */
import { Fragment, h } from 'preact'
import { useState } from 'preact/hooks'

import { IconChevronDown32 } from '../../../icons/icon-32/icon-chevron-down-32'
import { Button } from '../../button/button'
import { Modal } from '../modal'

export default {
  parameters: {
    order: 2
  },
  title: 'Components/Modal/Bottom'
}

export const Default = function () {
  const [open, setOpen] = useState<boolean>(false)
  function handleOpenButtonClick() {
    setOpen(true)
  }
  function handleCloseButtonClick() {
    setOpen(false)
  }
  const style = { height: '160px', padding: '12px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal open={open} position="bottom">
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
  const [open, setOpen] = useState<boolean>(false)
  function handleOpenButtonClick() {
    setOpen(true)
  }
  function handleCloseButtonClick() {
    setOpen(false)
  }
  const style = { height: '160px', padding: '12px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal noTransition open={open} position="bottom">
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
  const [open, setOpen] = useState<boolean>(false)
  function handleOpenButtonClick() {
    setOpen(true)
  }
  function handleOverlayClick() {
    setOpen(false)
  }
  const style = { height: '160px', padding: '12px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal onOverlayClick={handleOverlayClick} open={open} position="bottom">
        <div style={style}>foo</div>
      </Modal>
    </Fragment>
  )
}

export const CloseOnEscapeKeyDown = function () {
  const [open, setOpen] = useState<boolean>(false)
  function handleOpenButtonClick() {
    setOpen(true)
  }
  function handleEscapeKeyDown() {
    setOpen(false)
  }
  const style = { height: '160px', padding: '12px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal
        onEscapeKeyDown={handleEscapeKeyDown}
        open={open}
        position="bottom"
      >
        <div style={style}>foo</div>
      </Modal>
    </Fragment>
  )
}

export const Title = function () {
  const [open, setOpen] = useState<boolean>(false)
  function handleOpenButtonClick() {
    setOpen(true)
  }
  function handleCloseButtonClick() {
    setOpen(false)
  }
  const style = { height: '160px', padding: '12px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal open={open} position="bottom" title="foo">
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
  const [open, setOpen] = useState<boolean>(false)
  function handleOpenButtonClick() {
    setOpen(true)
  }
  function handleCloseButtonClick() {
    setOpen(false)
  }
  const style = { height: '160px', padding: '12px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal
        onCloseButtonClick={handleCloseButtonClick}
        open={open}
        position="bottom"
        title="foo"
      >
        <div style={style}>bar</div>
      </Modal>
    </Fragment>
  )
}

export const CloseButtonIcon = function () {
  const [open, setOpen] = useState<boolean>(false)
  function handleOpenButtonClick() {
    setOpen(true)
  }
  function handleCloseButtonClick() {
    setOpen(false)
  }
  const style = { height: '160px', padding: '12px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal
        closeButtonIcon={<IconChevronDown32 />}
        onCloseButtonClick={handleCloseButtonClick}
        open={open}
        position="bottom"
        title="foo"
      >
        <div style={style}>bar</div>
      </Modal>
    </Fragment>
  )
}

export const CloseButtonPositionLeft = function () {
  const [open, setOpen] = useState<boolean>(false)
  function handleOpenButtonClick() {
    setOpen(true)
  }
  function handleCloseButtonClick() {
    setOpen(false)
  }
  const style = { height: '160px', padding: '12px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal
        closeButtonPosition="left"
        onCloseButtonClick={handleCloseButtonClick}
        open={open}
        position="bottom"
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
  const parentStyle = { height: '160px', padding: '12px' }
  const [isChildOpen, setIsChildOpen] = useState<boolean>(false)
  function handleChildOpenButtonClick() {
    setIsChildOpen(true)
  }
  function handleChildCloseButtonClick() {
    setIsChildOpen(false)
  }
  const childStyle = { height: '120px', padding: '12px' }
  return (
    <Fragment>
      <Button onClick={handleParentOpenButtonClick}>Open parent modal</Button>
      <Modal
        onCloseButtonClick={handleParentCloseButtonClick}
        onEscapeKeyDown={handleParentCloseButtonClick}
        open={isParentOpen}
        position="bottom"
        title="Parent"
      >
        <div style={parentStyle}>
          <Button onClick={handleChildOpenButtonClick}>Open child modal</Button>
          <Modal
            onCloseButtonClick={handleChildCloseButtonClick}
            onEscapeKeyDown={handleChildCloseButtonClick}
            open={isChildOpen}
            position="bottom"
            title="Child"
          >
            <div style={childStyle} />
          </Modal>
        </div>
      </Modal>
    </Fragment>
  )
}
