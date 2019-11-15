import * as React from "react";
/** Interfaces */
export interface IInputFieldLayoutProps {
    placeholder?: string;
    disabled?: boolean;
    isPlaceholderCollapsed: boolean;
    errorMsg?: string;
    prependContent?: any;
    appendContent?: any;
    showPrependBackground?: boolean;
    children?: any;
}
declare const PropsWrappedStyledInputFieldLayout: (props: IInputFieldLayoutProps & React.HTMLProps<HTMLDivElement>) => JSX.Element;
/** Exports */
export default PropsWrappedStyledInputFieldLayout;
export { PropsWrappedStyledInputFieldLayout as InputFieldLayout, };
