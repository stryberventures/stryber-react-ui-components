import * as React from "react";
interface IDropDownFieldProps {
    placeholder: string;
    children: React.ReactNode;
    appendContent?: any;
    onClose?: () => void;
    disabled?: boolean;
    className?: string;
    sizeVariant?: 'normal' | 'mini';
    customPlaceholderFont?: boolean;
    placeholderClassName?: string;
}
declare const PropsWrappedStyledDropDownField: (props: IDropDownFieldProps) => JSX.Element;
/** Exports */
export default PropsWrappedStyledDropDownField;
export { PropsWrappedStyledDropDownField as DropDownField, };
