import { EventHandler } from '../../types/event-handler.js';
export type ModalProps = {
    children: JSX.Element;
    closeButtonIcon?: JSX.Element;
    closeButtonPosition?: ModalCloseButtonPosition;
    open: boolean;
    transition?: boolean;
    onCloseButtonClick?: EventHandler.onClick<HTMLButtonElement>;
    onEscapeKeyDown?: (event: KeyboardEvent) => void;
    onOverlayClick?: EventHandler.onClick<HTMLDivElement>;
    position?: ModalPosition;
    title?: string;
};
export type ModalCloseButtonPosition = 'left' | 'right';
export type ModalPosition = 'bottom' | 'center' | 'left' | 'right';
export declare const Modal: import("react").FC<Omit<import("../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLDivElement, ModalProps>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement> | undefined;
}>;
//# sourceMappingURL=modal.d.ts.map