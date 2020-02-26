import * as React from 'react';
/** Interfaces */
export interface IInputFieldProps {
    name?: string;
    type?: string;
    placeholder?: string;
    value?: any;
    disabled?: boolean;
    controlled?: boolean;
    onChange?: (e: React.BaseSyntheticEvent) => void;
    onFocus?: (e: React.BaseSyntheticEvent) => void;
    onBlur?: (e: React.BaseSyntheticEvent) => void;
    clearFormValueOnUnmount?: boolean;
    prependContent?: any;
    appendContent?: any;
    errorMessage?: string;
}
/** Main component */
declare const InputField: (props: IInputFieldProps & React.HTMLProps<HTMLInputElement>) => JSX.Element;
/** Exports */
export default InputField;
export { InputField, };
