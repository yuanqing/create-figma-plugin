/** @jsx h */
/* eslint-disable no-console */
import { h } from 'preact'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus'
import { Text } from '../../text/text'
import { FileUploadDropzone } from './file-upload-dropzone'

export default { title: 'Components/File Upload Dropzone' }

export const Default = function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files)
  }
  return (
    <FileUploadDropzone onSelectedFiles={handleSelectedFiles}>
      <Text align="center" muted>
        Text
      </Text>
    </FileUploadDropzone>
  )
}

export const Focused = function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files)
  }
  return (
    <FileUploadDropzone
      {...useInitialFocus()}
      onSelectedFiles={handleSelectedFiles}
    >
      <Text align="center" muted>
        Text
      </Text>
    </FileUploadDropzone>
  )
}

export const AcceptedFileTypes = function () {
  const acceptedFileTypes = ['image/x-png', 'image/gif', 'image/jpeg']
  function handleSelectedFiles(files: Array<File>) {
    console.log(files)
  }
  return (
    <FileUploadDropzone
      acceptedFileTypes={acceptedFileTypes}
      onSelectedFiles={handleSelectedFiles}
    >
      <Text align="center" muted>
        Text
      </Text>
    </FileUploadDropzone>
  )
}

export const Multiple = function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files)
  }
  return (
    <FileUploadDropzone multiple onSelectedFiles={handleSelectedFiles}>
      <Text align="center" muted>
        Text
      </Text>
    </FileUploadDropzone>
  )
}
