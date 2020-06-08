/** @jsx h */
import { h } from 'preact'

import { Text } from '../text/text'
import { FileUploadDropzone } from './file-upload-dropzone'

export default { title: 'File Upload Dropzone' }

function handleSelectedFiles(files?: Array<File>, event?: Event) {
  console.log(files) // eslint-disable-line no-console
  console.log(event) // eslint-disable-line no-console
}

export const Default = function () {
  return (
    <FileUploadDropzone multiple onSelectedFiles={handleSelectedFiles}>
      <Text align="center" muted>
        Text
      </Text>
    </FileUploadDropzone>
  )
}
