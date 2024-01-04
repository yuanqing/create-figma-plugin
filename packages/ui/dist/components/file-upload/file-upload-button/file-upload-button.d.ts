import { EventHandler } from '../../../types/event-handler.js';
import { FocusableComponentProps } from '../../../types/focusable-component-props.js';
export interface FileUploadButtonProps extends FocusableComponentProps<HTMLInputElement> {
    acceptedFileTypes?: Array<string>;
    children: JSX.Element;
    disabled?: boolean;
    fullWidth?: boolean;
    loading?: boolean;
    multiple?: boolean;
    onChange?: EventHandler.onChange<HTMLInputElement>;
    onClick?: EventHandler.onClick<HTMLInputElement>;
    onMouseDown?: EventHandler.onMouseDown<HTMLInputElement>;
    onSelectedFiles?: EventHandler.onSelectedFiles;
    secondary?: boolean;
}
export declare const FileUploadButton: import("react").FC<Omit<import("../../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLInputElement, FileUploadButtonProps>, "ref"> & {
    ref?: import("react").Ref<HTMLInputElement> | undefined;
}>;
//# sourceMappingURL=file-upload-button.d.ts.map