/* eslint-disable no-console */
/** @jsx h */
import { h } from 'preact'

import { Text } from '../../main/text/text'
import { FileUploadDropzone } from './file-upload-dropzone'

export default { title: 'Components/Form/File Upload Dropzone' }

export const Default = function () {
  function handleSelectedFiles(files: Array<File>, event: Event) {
    console.log(files)
    console.log(event)
  }
  return (
    <FileUploadDropzone onSelectedFiles={handleSelectedFiles}>
      <Text align="center" muted>
        Text
      </Text>
    </FileUploadDropzone>
  )
}

export const AcceptedFileTypes = function () {
  const acceptedFileTypes = ['image/x-png', 'image/gif', 'image/jpeg']
  function handleSelectedFiles(files: Array<File>, event: Event) {
    console.log(files)
    console.log(event)
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
  function handleSelectedFiles(files: Array<File>, event: Event) {
    console.log(files)
    console.log(event)
  }
  return (
    <FileUploadDropzone multiple onSelectedFiles={handleSelectedFiles}>
      <Text align="center" muted>
        Text
      </Text>
    </FileUploadDropzone>
  )
}
