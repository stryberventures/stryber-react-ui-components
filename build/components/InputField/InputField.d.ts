import * as React from 'react';
export interface IInputFieldProps {
    name?: string;
    type?: string;
    placeholder?: string;
    value?: any;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
    onChange?: (e: React.BaseSyntheticEvent) => void;
    onFocus?: (e: React.BaseSyntheticEvent) => void;
    onBlur?: (e: React.BaseSyntheticEvent) => void;
    clearFormValueOnUnmount?: boolean;
    prependContent?: any;
    appendContent?: any;
    errorMessage?: string;
    [key: string]: any;
}
declare const InputField: (props: IInputFieldProps & React.HTMLProps<HTMLInputElement>) => JSX.Element;
export default InputField;
export { InputField };
