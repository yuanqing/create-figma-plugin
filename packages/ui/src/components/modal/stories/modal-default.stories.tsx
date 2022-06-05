/** @jsx h */
/* eslint-disable no-console */
import { Fragment, h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { IconChevronDown32 } from '../../../icons/icon-32/icon-chevron-down-32'
import { Button } from '../../button/button'
import { Modal } from '../modal'

export default {
  parameters: {
    order: 1
  },
  title: 'Components/Modal/Default'
}

export const Default = function () {
  const [open, setOpen] = useState<boolean>(false)
  function handleOpenButtonClick(
    event: JSX.TargetedMouseEvent<HTMLButtonElement>
  ) {
    console.log(event)
    setOpen(true)
  }
  function handleCloseButtonClick(
    event: JSX.TargetedMouseEvent<HTMLButtonElement>
  ) {
    console.log(event)
    setOpen(false)
  }
  const style = { height: '160px', padding: '12px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal open={open}>
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
  function handleOpenButtonClick(
    event: JSX.TargetedMouseEvent<HTMLButtonElement>
  ) {
    console.log(event)
    setOpen(true)
  }
  function handleCloseButtonClick(
    event: JSX.TargetedMouseEvent<HTMLButtonElement>
  ) {
    console.log(event)
    setOpen(false)
  }
  const style = { height: '160px', padding: '12px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal noTransition open={open}>
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
  function handleOpenButtonClick(
    event: JSX.TargetedMouseEvent<HTMLButtonElement>
  ) {
    console.log(event)
    setOpen(true)
  }
  function handleOverlayClick(event: JSX.TargetedMouseEvent<HTMLDivElement>) {
    console.log(event)
    setOpen(false)
  }
  const style = { height: '160px', padding: '12px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal onOverlayClick={handleOverlayClick} open={open}>
        <div style={style}>foo</div>
      </Modal>
    </Fragment>
  )
}

export const CloseOnEscapeKeyDown = function () {
  const [open, setOpen] = useState<boolean>(false)
  function handleOpenButtonClick(
    event: JSX.TargetedMouseEvent<HTMLButtonElement>
  ) {
    console.log(event)
    setOpen(true)
  }
  function handleEscapeKeyDown(event: KeyboardEvent) {
    console.log(event)
    setOpen(false)
  }
  const style = { height: '160px', padding: '12px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal onEscapeKeyDown={handleEscapeKeyDown} open={open}>
        <div style={style}>foo</div>
      </Modal>
    </Fragment>
  )
}

export const Title = function () {
  const [open, setOpen] = useState<boolean>(false)
  function handleOpenButtonClick(
    event: JSX.TargetedMouseEvent<HTMLButtonElement>
  ) {
    console.log(event)
    setOpen(true)
  }
  function handleCloseButtonClick(
    event: JSX.TargetedMouseEvent<HTMLButtonElement>
  ) {
    console.log(event)
    setOpen(false)
  }
  const style = { height: '160px', padding: '12px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal open={open} title="foo">
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
  function handleOpenButtonClick(
    event: JSX.TargetedMouseEvent<HTMLButtonElement>
  ) {
    console.log(event)
    setOpen(true)
  }
  function handleCloseButtonClick(
    event: JSX.TargetedMouseEvent<HTMLButtonElement>
  ) {
    console.log(event)
    setOpen(false)
  }
  const style = { height: '160px', padding: '12px' }
  return (
    <Fragment>
      <Button onClick={handleOpenButtonClick}>Open</Button>
      <Modal
        onCloseButtonClick={handleCloseButtonClick}
        open={open}
        title="foo"
      >
        <div style={style}>bar</div>
      </Modal>
    </Fragment>
  )
}

export const CloseButtonIcon = function () {
  const [open, setOpen] = useState<boolean>(false)
  function handleOpenButtonClick(
    event: JSX.TargetedMouseEvent<HTMLButtonElement>
  ) {
    console.log(event)
    setOpen(true)
  }
  function handleCloseButtonClick(
    event: JSX.TargetedMouseEvent<HTMLButtonElement>
  ) {
    console.log(event)
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
        title="foo"
      >
        <div style={style}>bar</div>
      </Modal>
    </Fragment>
  )
}

export const CloseButtonPositionLeft = function () {
  const [open, setOpen] = useState<boolean>(false)
  function handleOpenButtonClick(
    event: JSX.TargetedMouseEvent<HTMLButtonElement>
  ) {
    console.log(event)
    setOpen(true)
  }
  function handleCloseButtonClick(
    event: JSX.TargetedMouseEvent<HTMLButtonElement>
  ) {
    console.log(event)
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
        title="foo"
      >
        <div style={style}>bar</div>
      </Modal>
    </Fragment>
  )
}

export const Nested = function () {
  const [parentOpen, setParentOpen] = useState<boolean>(false)
  function handleParentOpenButtonClick(
    event: JSX.TargetedMouseEvent<HTMLButtonElement>
  ) {
    console.log(event)
    setParentOpen(true)
  }
  function handleParentCloseButtonClick(
    event: JSX.TargetedMouseEvent<HTMLButtonElement>
  ) {
    console.log(event)
    setParentOpen(false)
  }
  const parentStyle = { height: '160px', padding: '12px' }
  const [childOpen, setChildOpen] = useState<boolean>(false)
  function handleChildOpenButtonClick(
    event: JSX.TargetedMouseEvent<HTMLButtonElement>
  ) {
    console.log(event)
    setChildOpen(true)
  }
  function handleChildCloseButtonClick(
    event: JSX.TargetedMouseEvent<HTMLButtonElement>
  ) {
    console.log(event)
    setChildOpen(false)
  }
  const childStyle = { height: '120px', padding: '12px' }
  return (
    <Fragment>
      <Button onClick={handleParentOpenButtonClick}>Open parent modal</Button>
      <Modal
        onCloseButtonClick={handleParentCloseButtonClick}
        open={parentOpen}
        title="Parent"
      >
        <div style={parentStyle}>
          <Button onClick={handleChildOpenButtonClick}>Open child modal</Button>
          <Modal
            onCloseButtonClick={handleChildCloseButtonClick}
            open={childOpen}
            title="Child"
          >
            <div style={childStyle} />
          </Modal>
        </div>
      </Modal>
    </Fragment>
  )
}
