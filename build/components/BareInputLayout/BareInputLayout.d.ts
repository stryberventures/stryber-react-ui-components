import * as React from "react";
/** Interfaces */
export interface IBareInputLayoutProps {
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
    label?: string;
    large?: boolean;
    labelClassName?: any;
}
declare const PropsWrappedStyledBareInputLayout: (props: IBareInputLayoutProps & React.HTMLProps<HTMLDivElement>) => JSX.Element;
/** Exports */
export default PropsWrappedStyledBareInputLayout;
export { PropsWrappedStyledBareInputLayout as BareInputLayout, };
