import * as React from "react";
/** Interfaces */
export interface IInputFieldLayoutProps {
    placeholder?: string;
    placeholderClassName?: string;
    disabled?: boolean;
    isPlaceholderCollapsed: boolean;
    errorMsg?: string;
    prependContent?: any;
    appendContent?: any;
    showPrependBackground?: boolean;
    children?: any;
    sizeVariant?: 'normal' | 'mini';
    customPlaceholderFont?: boolean;
}
declare const PropsWrappedStyledInputFieldLayout: (props: IInputFieldLayoutProps & React.HTMLProps<HTMLDivElement>) => JSX.Element;
/** Exports */
export default PropsWrappedStyledInputFieldLayout;
export { PropsWrappedStyledInputFieldLayout as InputFieldLayout, };
