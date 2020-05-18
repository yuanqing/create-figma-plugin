/** @jsx h */
import { h } from 'preact'

import { FileUploadDropzone } from './file-upload-dropzone'

export default { title: 'File Upload Dropzone' }

function handleSelectedFiles() {}

export const Default = function () {
  return (
    <FileUploadDropzone onSelectedFiles={handleSelectedFiles}>
      foo
    </FileUploadDropzone>
  )
}
