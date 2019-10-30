import * as React from 'react';
import { WithStyles } from 'react-jss';
interface InputFieldProps {
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
    onChange?: (e: React.BaseSyntheticEvent) => void;
    placeholder?: string;
    name: string;
    label?: string;
    type?: string;
    onFocus?: (e: React.BaseSyntheticEvent) => void;
    onBlur?: (e: React.BaseSyntheticEvent) => void;
    clearFormValueOnUnmount?: boolean;
    [key: string]: any;
}
declare const StyledInputField: React.ComponentType<Pick<InputFieldProps & React.HTMLProps<HTMLInputElement> & WithStyles<(theme: any) => {
    root: {
        position: string;
        borderRadius: number;
        overflow: string;
        border: string;
        transition: string;
        backgroundColor: string;
        display: string;
        justifyContent: string;
        '&:focus-within': {
            border: string;
            outline: string;
        };
    };
    invalidRoot: {
        border: string;
    };
    disabledRoot: {
        backgroundColor: string;
    };
    inputWrapper: {
        flex: number;
        position: string;
    };
    input: {
        width: string;
        height: string;
        border: number;
        padding: number;
        backgroundColor: string;
        transition: string;
        color: string;
        fontFamily: string;
        fontSize: number;
        '&:focus': {
            color: string;
            outline: string;
        };
    };
    inputWithPlaceholder: {
        paddingBottom: number;
        paddingTop: number;
    };
    invalidInput: {
        '&:focus': {
            color: string;
        };
    };
    placeholder: {
        pointerEvents: string;
        position: string;
        transition: string;
        fontSize: number;
        fontFamily: string;
        display: string;
        verticalAlign: string;
        color: string;
        width: string;
        height: string;
        left: number;
        top: number;
        padding: number;
        margin: number;
        transform: string;
        transformOrigin: string;
    };
    invalidPlaceholder: {};
    placeholderCollapsed: {
        fontSize: number;
        transform: string;
    };
    prepend: {
        transition: string;
        position: string;
        backgroundColor: string;
        minWidth: number;
    };
    invalidPrepend: {
        backgroundColor: string;
    };
    append: {};
    errorMessage: {
        color: string;
        fontFamily: string;
        fontSize: number;
    };
}>, React.ReactText> & {
    classes?: Partial<Record<"placeholder" | "root" | "invalidRoot" | "disabledRoot" | "inputWrapper" | "input" | "inputWithPlaceholder" | "invalidInput" | "invalidPlaceholder" | "placeholderCollapsed" | "prepend" | "invalidPrepend" | "append" | "errorMessage", string>> | undefined;
}>;
export default StyledInputField;
export { StyledInputField as InputField };
