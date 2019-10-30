import * as React from 'react';
import { WithStyles } from 'react-jss';
interface InputFieldProps {
    prependContent?: any;
    appendContent?: any;
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
        transition: string; /** Wrappers to merge form and props methods */
        position: string;
        backgroundColor: string;
        minWidth: number;
        overflow: string;
        display: string;
        alignItems: string;
        justifyContent: string;
        zIndex: number;
    };
    prependMargin: {
        marginRight: number;
    };
    prependContent: {
        color: string;
        display: string;
        alignItems: string;
        justifyContent: string;
        padding: number;
        paddingLeft: number;
        height: string;
    };
    prependBackground: {
        right: number;
        zIndex: number;
        position: string;
        height: string;
    };
    invalidPrepend: {
        backgroundColor: string;
    };
    append: {}; /** On mount/unmount */
    errorMessage: {
        color: string;
        fontFamily: string; /** Update form with internal value on mount */
        fontSize: number;
    };
}>, React.ReactText> & {
    classes?: Partial<Record<"prependContent" | "placeholder" | "root" | "invalidRoot" | "disabledRoot" | "inputWrapper" | "input" | "inputWithPlaceholder" | "invalidInput" | "invalidPlaceholder" | "placeholderCollapsed" | "prepend" | "prependMargin" | "prependBackground" | "invalidPrepend" | "append" | "errorMessage", string>> | undefined;
}>;
export default StyledInputField;
export { StyledInputField as InputField };
