import * as React from 'react';
import { WithStyles } from 'react-jss';
interface InputFieldProps {
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
    onChange?: (e: React.SyntheticEvent) => void;
    placeholder?: string;
    name: string;
    label?: string;
    type?: string;
    [key: string]: any;
}
declare const StyledInputField: React.ComponentType<Pick<InputFieldProps & React.HTMLProps<HTMLInputElement> & WithStyles<(theme: any) => {
    root: {
        position: string;
        borderRadius: number;
        overflow: string;
        border: string;
        transition: string;
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
    input: {
        flex: number;
        width: string;
        height: string;
        border: number;
        padding: number;
        fontFamily: string;
        fontSize: number;
        '&:focus': {
            outline: string;
        };
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
    classes?: Partial<Record<"input" | "root" | "invalidRoot" | "prepend" | "invalidPrepend" | "append" | "errorMessage", string>> | undefined;
}>;
export default StyledInputField;
export { StyledInputField as InputField };
