/** @jsx h */
import { h } from 'preact'
import { FileUploadButton } from './file-upload-button'

export default { title: 'File Upload Button' }

const longText = Array(100)
  .fill('Text')
  .join(' ')

export const Button = function () {
  return <FileUploadButton multiple>Text</FileUploadButton>
}

export const ButtonLoading = function () {
  return (
    <FileUploadButton multiple loading>
      Text
    </FileUploadButton>
  )
}

export const ButtonDisabled = function () {
  return (
    <FileUploadButton multiple disabled>
      Text
    </FileUploadButton>
  )
}

export const ButtonDisabledLoading = function () {
  return (
    <FileUploadButton multiple disabled loading>
      Text
    </FileUploadButton>
  )
}

export const ButtonFullWidth = function () {
  return (
    <FileUploadButton multiple fullWidth>
      Text
    </FileUploadButton>
  )
}

export const ButtonFullWidthLongText = function () {
  return (
    <FileUploadButton multiple fullWidth>
      {longText}
    </FileUploadButton>
  )
}
