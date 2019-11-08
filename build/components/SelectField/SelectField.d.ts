import * as React from 'react';
/** Interfaces */
export interface IChoiceData {
    label: any;
    value: any;
}
export interface ISelectFieldProps {
    name: string;
    type?: string;
    placeholder?: string;
    choices: IChoiceData[];
    value?: any;
    disabled?: boolean;
    onChange?: (value: any) => void;
    onFocus?: (e: React.BaseSyntheticEvent) => void;
    onBlur?: (e: React.BaseSyntheticEvent) => void;
    clearFormValueOnUnmount?: boolean;
    prependContent?: any;
    appendContent?: any;
    errorMessage?: string;
}
declare const PropsWrappedStyledSelectField: (props: ISelectFieldProps) => JSX.Element;
/** Exports */
export default PropsWrappedStyledSelectField;
export { PropsWrappedStyledSelectField as SelectField, };
