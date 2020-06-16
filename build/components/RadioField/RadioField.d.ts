import * as React from "react";
/** Interfaces */
export interface IRadioFieldProps {
    name: string;
    value: any;
    placeholder?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (e: React.BaseSyntheticEvent) => void;
    sizeVariant?: 'small' | 'normal' | 'large';
    errorMessage?: string;
}
declare const PropsWrappedStyledRadioField: (props: IRadioFieldProps & React.HTMLProps<HTMLInputElement>) => JSX.Element;
/** Exports */
export default PropsWrappedStyledRadioField;
export { PropsWrappedStyledRadioField as RadioField, };
