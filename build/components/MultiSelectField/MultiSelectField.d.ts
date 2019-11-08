import * as React from 'react';
/** Interfaces */
export interface IMultiChoiceData {
    label: any;
    value: any;
}
export interface IMultiSelectFieldProps {
    name: string;
    type?: string;
    placeholder?: string;
    choices: IMultiChoiceData[];
    values?: any[];
    disabled?: boolean;
    onChange?: (value: any) => void;
    onFocus?: (e: React.BaseSyntheticEvent) => void;
    onBlur?: (e: React.BaseSyntheticEvent) => void;
    clearFormValueOnUnmount?: boolean;
    prependContent?: any;
    appendContent?: any;
    errorMessage?: string;
}
declare const PropsWrappedStyledMultiSelectField: (props: IMultiSelectFieldProps) => JSX.Element;
/** Exports */
export default PropsWrappedStyledMultiSelectField;
export { PropsWrappedStyledMultiSelectField as MultiSelectField, };
