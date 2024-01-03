export type ResizeBehaviorOnDoubleClick = 'minimize' | 'maximize';
export type ResizeDirection = 'both' | 'horizontal' | 'vertical';
export declare function useWindowResize(onWindowResize: (size: {
    width: number;
    height: number;
}) => void, options?: {
    maxHeight?: number;
    maxWidth?: number;
    minHeight?: number;
    minWidth?: number;
    resizeBehaviorOnDoubleClick?: ResizeBehaviorOnDoubleClick;
    resizeDirection?: ResizeDirection;
}): (size: {
    width: number;
    height: number;
}) => void;
//# sourceMappingURL=use-window-resize.d.ts.map