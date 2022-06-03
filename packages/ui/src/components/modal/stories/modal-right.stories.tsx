/** @jsx h */
import { Fragment, h } from 'preact'
import { useState } from 'preact/hooks'

import { IconChevronRight32 } from '../../../icons/icon-32/icon-chevron-right-32'
import { Button } from '../../button/button'
import { Modal } from '../modal'

export default {
  parameters: {
    order: 4
  },
  title: 'Components/Modal/Right'
}

export const Default = function () {
  const [open, setOpen] = useState<boolean>(false)
  function handleOpenButtonClick() {
    setOpen(true)
  }
  function handleCloseButtonClick() {
    setOpen(false)
  }
  const style = { padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal open={open} position="right">
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
  const style = { padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal noTransition open={open} position="right">
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
  const style = { padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal onOverlayClick={handleOverlayClick} open={open} position="right">
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
  const style = { padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal onEscapeKeyDown={handleEscapeKeyDown} open={open} position="right">
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
  const style = { padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal open={open} position="right" title="foo">
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
  const style = { padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal
        onCloseButtonClick={handleCloseButtonClick}
        open={open}
        position="right"
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
  const style = { padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal
        closeButtonIcon={<IconChevronRight32 />}
        onCloseButtonClick={handleCloseButtonClick}
        open={open}
        position="right"
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
  const style = { padding: '12px', width: '240px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal
        closeButtonPosition="right"
        onCloseButtonClick={handleCloseButtonClick}
        open={open}
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
        onCloseButtonClick={handleParentCloseButtonClick}
        onEscapeKeyDown={handleParentCloseButtonClick}
        open={isParentOpen}
        position="right"
        title="Parent"
      >
        <div style={parentStyle}>
          <Button onClick={handleChildOpenButtonClick}>Open child modal</Button>
          <Modal
            onCloseButtonClick={handleChildCloseButtonClick}
            onEscapeKeyDown={handleChildCloseButtonClick}
            open={isChildOpen}
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
