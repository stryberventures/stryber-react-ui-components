import * as React from "react";
export interface ICheckboxFieldProps {
    name: string;
    value?: any;
    placeholder?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (e: React.BaseSyntheticEvent) => void;
    onFocus?: (e: React.BaseSyntheticEvent) => void;
    variant?: 'checkmark' | 'switch';
    errorMessage?: string;
}
declare const PropsWrappedStyledCheckboxField: (props: ICheckboxFieldProps & React.HTMLProps<HTMLInputElement>) => JSX.Element;
/** Exports */
export default PropsWrappedStyledCheckboxField;
export { PropsWrappedStyledCheckboxField as CheckboxField, };
