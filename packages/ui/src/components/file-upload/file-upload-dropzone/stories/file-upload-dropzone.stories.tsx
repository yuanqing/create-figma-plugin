/* eslint-disable no-console */
import { h } from 'preact'

import { useInitialFocus } from '../../../../hooks/use-initial-focus/use-initial-focus.js'
import { Muted } from '../../../../inline-text/muted/muted.js'
import { Text } from '../../../text/text.js'
import { FileUploadDropzone } from '../file-upload-dropzone.js'

export default {
  parameters: {
    fixedWidth: true
  },
  title: 'Components/File Upload Dropzone'
}

export const Passive = function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files)
  }
  return (
    <FileUploadDropzone onSelectedFiles={handleSelectedFiles}>
      <Text align="center">
        <Muted>Text</Muted>
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
      <Text align="center">
        <Muted>Text</Muted>
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
      <Text align="center">
        <Muted>Text</Muted>
      </Text>
    </FileUploadDropzone>
  )
}

export const MultipleFiles = function () {
  function handleSelectedFiles(files: Array<File>) {
    console.log(files)
  }
  return (
    <FileUploadDropzone multiple onSelectedFiles={handleSelectedFiles}>
      <Text align="center">
        <Muted>Text</Muted>
      </Text>
    </FileUploadDropzone>
  )
}
