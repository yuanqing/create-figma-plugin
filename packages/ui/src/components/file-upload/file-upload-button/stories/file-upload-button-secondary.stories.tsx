/** @jsx h */
/* eslint-disable no-console */
import { h } from 'preact'

import { useInitialFocus } from '../../../../hooks/use-initial-focus/use-initial-focus'
import { FileUploadButton } from '../file-upload-button'

export default {
  parameters: {
    order: 2
  },
  title: 'Components/File Upload Button/Secondary'
}

export const Passive = function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files)
  }
  return (
    <FileUploadButton onSelectedFiles={handleSelectedFiles} secondary>
      Text
    </FileUploadButton>
  )
}

export const Focused = function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files)
  }
  return (
    <FileUploadButton
      {...useInitialFocus()}
      onSelectedFiles={handleSelectedFiles}
      secondary
    >
      Text
    </FileUploadButton>
  )
}

export const Disabled = function () {
  function handleSelectedFiles() {
    throw new Error('This function should not be called')
  }
  return (
    <FileUploadButton disabled onSelectedFiles={handleSelectedFiles} secondary>
      Text
    </FileUploadButton>
  )
}

export const Loading = function () {
  function handleSelectedFiles() {
    throw new Error('This function should not be called')
  }
  return (
    <FileUploadButton loading onSelectedFiles={handleSelectedFiles} secondary>
      Text
    </FileUploadButton>
  )
}

export const LoadingFocused = function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files)
  }
  return (
    <FileUploadButton
      {...useInitialFocus()}
      loading
      onSelectedFiles={handleSelectedFiles}
      secondary
    >
      Text
    </FileUploadButton>
  )
}

export const LoadingDisabled = function () {
  function handleSelectedFiles() {
    throw new Error('This function should not be called')
  }
  return (
    <FileUploadButton
      disabled
      loading
      onSelectedFiles={handleSelectedFiles}
      secondary
    >
      Text
    </FileUploadButton>
  )
}

export const FullWidth = function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files)
  }
  return (
    <FileUploadButton fullWidth onSelectedFiles={handleSelectedFiles} secondary>
      Text
    </FileUploadButton>
  )
}
FullWidth.parameters = {
  fixedWidth: true
}

export const FullWidthLongText = function () {
  const longText = Array(100).fill('Text').join(' ')
  function handleSelectedFiles(files: Array<File>) {
    console.log(files)
  }
  return (
    <FileUploadButton fullWidth onSelectedFiles={handleSelectedFiles} secondary>
      {longText}
    </FileUploadButton>
  )
}
FullWidthLongText.parameters = {
  fixedWidth: true
}

export const AcceptedFileTypes = function () {
  const acceptedFileTypes = ['image/x-png', 'image/gif', 'image/jpeg']
  function handleSelectedFiles(files: Array<File>) {
    console.log(files)
  }
  return (
    <FileUploadButton
      acceptedFileTypes={acceptedFileTypes}
      onSelectedFiles={handleSelectedFiles}
      secondary
    >
      Text
    </FileUploadButton>
  )
}

export const MultipleFiles = function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files)
  }
  return (
    <FileUploadButton multiple onSelectedFiles={handleSelectedFiles} secondary>
      Text
    </FileUploadButton>
  )
}
