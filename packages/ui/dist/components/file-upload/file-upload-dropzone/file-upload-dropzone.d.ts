import { EventHandler } from '../../../types/event-handler.js';
import { FocusableComponentProps } from '../../../types/focusable-component-props.js';
export interface FileUploadDropzoneProps extends FocusableComponentProps<HTMLInputElement> {
    acceptedFileTypes?: Array<string>;
    children: JSX.Element;
    multiple?: boolean;
    onBlur?: EventHandler.onBlur<HTMLInputElement>;
    onChange?: EventHandler.onChange<HTMLInputElement>;
    onDragEnd?: EventHandler.onDragEnd<HTMLInputElement>;
    onDragEnter?: EventHandler.onDragEnter<HTMLInputElement>;
    onDragOver?: EventHandler.onDragOver<HTMLInputElement>;
    onDrop?: EventHandler.onDrop<HTMLInputElement>;
    onSelectedFiles?: EventHandler.onSelectedFiles;
}
export declare const FileUploadDropzone: import("react").FC<Omit<import("../../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLInputElement, FileUploadDropzoneProps>, "ref"> & {
    ref?: import("react").Ref<HTMLInputElement> | undefined;
}>;
//# sourceMappingURL=file-upload-dropzone.d.ts.map