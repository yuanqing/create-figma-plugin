/** @jsx h */
import { h } from 'preact'
import { ButtonUploadFile } from './button-upload-file'

export default { title: 'Button Upload File' }

const longText = Array(100)
  .fill('Text')
  .join(' ')

export const Button = function () {
  return <ButtonUploadFile multiple>Text</ButtonUploadFile>
}

export const ButtonLoading = function () {
  return (
    <ButtonUploadFile multiple loading>
      Text
    </ButtonUploadFile>
  )
}

export const ButtonDisabled = function () {
  return (
    <ButtonUploadFile multiple disabled>
      Text
    </ButtonUploadFile>
  )
}

export const ButtonDisabledLoading = function () {
  return (
    <ButtonUploadFile multiple disabled loading>
      Text
    </ButtonUploadFile>
  )
}

export const ButtonFullWidth = function () {
  return (
    <ButtonUploadFile multiple fullWidth>
      Text
    </ButtonUploadFile>
  )
}

export const ButtonFullWidthLongText = function () {
  return (
    <ButtonUploadFile multiple fullWidth>
      {longText}
    </ButtonUploadFile>
  )
}
