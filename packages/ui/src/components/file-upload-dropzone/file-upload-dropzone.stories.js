/** @jsx h */
import { h } from 'preact'
import { FileUploadDropzone } from './file-upload-dropzone'

export default { title: 'File Upload Dropzone' }

export const Default = function () {
  return <FileUploadDropzone onSelectedFiles={function () {}} />
}
