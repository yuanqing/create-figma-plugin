import { Fragment, h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { IconLayerComponent16 } from '../icons/icon-16/icon-layer-component-16'
import { IconLayerFrame16 } from '../icons/icon-16/icon-layer-frame-16'
import { IconSpaceHorizontal16 } from '../icons/icon-16/icon-space-horizontal-16'
import { IconCheckCircle32 } from '../icons/icon-32/icon-check-circle-32'
import { IconInfo32 } from '../icons/icon-32/icon-info-32'
import { IconWarning32 } from '../icons/icon-32/icon-warning-32'
import { Bold } from '../inline-text/bold/bold'
import { Muted } from '../inline-text/muted/muted'
import { Columns } from '../layout/columns/columns'
import { Stack } from '../layout/stack/stack'
import { VerticalSpace } from '../layout/vertical-space/vertical-space'
import { Banner } from './banner/banner'
import { Button } from './button/button'
import { Dropdown } from './dropdown/dropdown'
import { FileUploadButton } from './file-upload/file-upload-button/file-upload-button'
import { FileUploadDropzone } from './file-upload/file-upload-dropzone/file-upload-dropzone'
import { Layer } from './layer/layer'
import { Modal } from './modal/modal'
import { RangeSlider } from './range-slider/range-slider'
import { SegmentedControl } from './segmented-control/segmented-control'
import { Text } from './text/text'
import { TextboxColor } from './textbox/textbox-color/textbox-color'
import { TextboxNumeric } from './textbox/textbox-numeric/textbox-numeric'
import { Toggle } from './toggle/toggle'

export default {
  title: 'Components'
}

const boxStyle = {
  alignItems: 'center',
  backgroundColor: 'var(--figma-color-bg-secondary)',
  display: 'flex',
  height: '92px',
  justifyContent: 'center',
  padding: '24px 40px'
}

export const Index = function () {
  const [componentLayerValue, setComponentLayerValue] = useState<boolean>(true)
  const [dropdownValue, setDropdownValue] = useState<string>('Regular')
  const [frameLayerValue, setFrameLayerValue] = useState<boolean>(true)
  const [rangeSliderValue, setRangeSliderValue] = useState<string>('42')
  const [segmentedControlValue, setSegmentedControlValue] =
    useState<string>('1st')
  const [textboxColorHexColor, setTextboxColorHexColor] =
    useState<string>('0D99FF')
  const [textboxColorOpacity, setTextboxColorOpacity] = useState<string>('100%')
  const [textboxNumericValue, setTextboxNumericValue] = useState<string>('42')
  const [toggleValue, setToggleValue] = useState<boolean>(true)
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <Fragment>
      <Columns space="extraLarge">
        <div style={{ width: '240px' }}>
          <Stack space="large">
            <div style={boxStyle}>
              <Toggle
                onChange={function (
                  event: JSX.TargetedEvent<HTMLInputElement>
                ) {
                  setToggleValue(event.currentTarget.checked)
                }}
                value={toggleValue}
              >
                <Text>Auto-update</Text>
              </Toggle>
            </div>
            <Stack space="extraSmall">
              <Button fullWidth>Make Something Wonderful</Button>
              <Button danger fullWidth>
                Discard Changes
              </Button>
              <Button disabled fullWidth loading>
                Loading
              </Button>
            </Stack>
            <div style={boxStyle}>
              <TextboxNumeric
                icon={<IconSpaceHorizontal16 />}
                onInput={function (event: JSX.TargetedEvent<HTMLInputElement>) {
                  setTextboxNumericValue(event.currentTarget.value)
                }}
                value={textboxNumericValue}
                variant="border"
              />
            </div>
            <Stack space="extraSmall">
              <Layer
                icon={<IconLayerFrame16 />}
                onChange={function (
                  event: JSX.TargetedEvent<HTMLInputElement>
                ) {
                  setFrameLayerValue(event.currentTarget.checked)
                }}
                value={frameLayerValue}
              >
                Frame
              </Layer>
              <Layer
                bold
                component
                icon={<IconLayerComponent16 />}
                onChange={function (
                  event: JSX.TargetedEvent<HTMLInputElement>
                ) {
                  setComponentLayerValue(event.currentTarget.checked)
                }}
                value={componentLayerValue}
              >
                Component
              </Layer>
            </Stack>
            <div style={boxStyle}>
              <RangeSlider
                maximum={100}
                minimum={0}
                onInput={function (event: JSX.TargetedEvent<HTMLInputElement>) {
                  setRangeSliderValue(event.currentTarget.value)
                }}
                value={rangeSliderValue}
              />
            </div>
            <div style={boxStyle}>
              <Button
                onClick={function () {
                  setModalOpen(true)
                }}
                secondary
              >
                Open Modal
              </Button>
              <Modal
                onCloseButtonClick={function () {
                  setModalOpen(false)
                }}
                onOverlayClick={function () {
                  setModalOpen(false)
                }}
                open={modalOpen}
                title="Modal"
              >
                <div
                  style={{ height: '120px', padding: '16px', width: '240px' }}
                >
                  <Button
                    onClick={function () {
                      setModalOpen(false)
                    }}
                    secondary
                  >
                    Close Modal
                  </Button>
                </div>
              </Modal>
            </div>
          </Stack>
        </div>
        <div style={{ width: '240px' }}>
          <Stack space="large">
            <div style={boxStyle}>
              <SegmentedControl
                onChange={function (
                  event: JSX.TargetedEvent<HTMLInputElement>
                ) {
                  setSegmentedControlValue(event.currentTarget.value)
                }}
                options={[{ value: '1st' }, { value: '2nd' }, { value: '3rd' }]}
                value={segmentedControlValue}
              />
            </div>
            <FileUploadDropzone
              acceptedFileTypes={['image/jpeg', 'image/png']}
              multiple
            >
              <Text align="center">
                <Bold>Drop images here</Bold>
              </Text>
              <VerticalSpace space="small" />
              <Text align="center">
                <Muted>or</Muted>
              </Text>
              <VerticalSpace space="small" />
              <FileUploadButton acceptedFileTypes={['image/jpeg', 'image/png']}>
                Choose Image Files
              </FileUploadButton>
            </FileUploadDropzone>
            <div style={boxStyle}>
              <Dropdown
                onChange={function (
                  event: JSX.TargetedEvent<HTMLInputElement>
                ) {
                  setDropdownValue(event.currentTarget.value)
                }}
                options={[
                  { value: 'Light' },
                  { value: 'Regular' },
                  { value: 'Semibold' },
                  { value: 'Bold' }
                ]}
                value={dropdownValue}
                variant="border"
              />
            </div>
            <Stack space="extraSmall">
              <Banner icon={<IconInfo32 />}>
                Select a layer to get started
              </Banner>
              <Banner icon={<IconCheckCircle32 />} variant="success">
                Plugin unlocked
              </Banner>
              <Banner icon={<IconWarning32 />} variant="warning">
                Invalid license key
              </Banner>
            </Stack>
            <div style={boxStyle}>
              <TextboxColor
                hexColor={textboxColorHexColor}
                onHexColorInput={function (
                  event: JSX.TargetedEvent<HTMLInputElement>
                ) {
                  setTextboxColorHexColor(event.currentTarget.value)
                }}
                onOpacityInput={function (
                  event: JSX.TargetedEvent<HTMLInputElement>
                ) {
                  setTextboxColorOpacity(event.currentTarget.value)
                }}
                opacity={textboxColorOpacity}
                variant="border"
              />
            </div>
          </Stack>
        </div>
      </Columns>
    </Fragment>
  )
}
