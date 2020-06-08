/** @jsx h */
import { h } from 'preact'

import { FileUploadButton } from './file-upload-button'

export default { title: 'File Upload Button' }

const longText = Array(100).fill('Text').join(' ')

function handleSelectedFiles(files?: Array<File>, event?: Event) {
  console.log(files) // eslint-disable-line no-console
  console.log(event) // eslint-disable-line no-console
}

export const Button = function () {
  return (
    <FileUploadButton multiple onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>
  )
}

export const ButtonLoading = function () {
  return (
    <FileUploadButton loading multiple onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>
  )
}

export const ButtonDisabled = function () {
  return (
    <FileUploadButton disabled multiple onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>
  )
}

export const ButtonDisabledLoading = function () {
  return (
    <FileUploadButton
      disabled
      loading
      multiple
      onSelectedFiles={handleSelectedFiles}
    >
      Text
    </FileUploadButton>
  )
}

export const ButtonFullWidth = function () {
  return (
    <FileUploadButton fullWidth multiple onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>
  )
}

export const ButtonFullWidthLongText = function () {
  return (
    <FileUploadButton fullWidth multiple onSelectedFiles={handleSelectedFiles}>
      {longText}
    </FileUploadButton>
  )
}
