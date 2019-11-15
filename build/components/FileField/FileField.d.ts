import * as React from 'react';
/** Interfaces */
export interface IFileFieldProps {
    name: string;
    accept: string;
    placeholder?: string;
    value?: string;
    multiple?: boolean;
    disabled?: boolean;
    onChange?: (e: React.BaseSyntheticEvent) => void;
    onFocus?: (e: React.BaseSyntheticEvent) => void;
    onBlur?: (e: React.BaseSyntheticEvent) => void;
    errorMessage?: string;
    inputText?: (filesNumber: number) => string;
    prependContent?: any;
    appendContent?: (files: any, errorMsg: string, clickFileInput: (e: any) => any, disabled: boolean) => any;
    clearFormValueOnUnmount?: boolean;
}
declare const PropsWrappedStyledStyledFileField: (props: IFileFieldProps) => JSX.Element;
/** Exports */
export default PropsWrappedStyledStyledFileField;
export { PropsWrappedStyledStyledFileField as FileField, };
