/* eslint-disable no-console */
/** @jsx h */
import { h } from 'preact'

import { FileUploadButton } from './file-upload-button'

export default { title: 'Components/Form/File Upload Button' }

export const Default = function () {
  function handleSelectedFiles(files: Array<File>, event: Event) {
    console.log(files)
    console.log(event)
  }
  return (
    <FileUploadButton onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>
  )
}

export const AcceptedFileTypes = function () {
  const acceptedFileTypes = ['image/x-png', 'image/gif', 'image/jpeg']
  function handleSelectedFiles(files: Array<File>, event: Event) {
    console.log(files)
    console.log(event)
  }
  return (
    <FileUploadButton
      acceptedFileTypes={acceptedFileTypes}
      onSelectedFiles={handleSelectedFiles}
    >
      Text
    </FileUploadButton>
  )
}

export const Multiple = function () {
  function handleSelectedFiles(files: Array<File>, event: Event) {
    console.log(files)
    console.log(event)
  }
  return (
    <FileUploadButton multiple onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>
  )
}

export const Loading = function () {
  function handleSelectedFiles(files: Array<File>, event: Event) {
    console.log(files)
    console.log(event)
  }
  return (
    <FileUploadButton loading onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>
  )
}

export const Disabled = function () {
  function handleSelectedFiles(files: Array<File>, event: Event) {
    console.log(files)
    console.log(event)
  }
  return (
    <FileUploadButton disabled onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>
  )
}

export const FullWidth = function () {
  function handleSelectedFiles(files: Array<File>, event: Event) {
    console.log(files)
    console.log(event)
  }
  return (
    <FileUploadButton fullWidth onSelectedFiles={handleSelectedFiles}>
      Text
    </FileUploadButton>
  )
}
