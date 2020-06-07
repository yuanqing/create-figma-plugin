/** @jsx h */
import { h } from 'preact'

import { FileUploadDropzone } from './file-upload-dropzone'

export default { title: 'File Upload Dropzone' }

function handleSelectedFiles(files?: Array<File>, event?: Event) {
  console.log(files) // eslint-disable-line no-console
  console.log(event) // eslint-disable-line no-console
}

export const Default = function () {
  return (
    <FileUploadDropzone multiple onSelectedFiles={handleSelectedFiles}>
      foo
    </FileUploadDropzone>
  )
}
