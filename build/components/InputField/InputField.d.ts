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
    };
    input: {
        width: string;
        height: string;
        borderRadius: number;
        padding: number;
        border: string;
        transition: string;
        '&:focus': {
            border: string;
            outline: string;
        };
    };
    invalid: {
        border: string;
    };
}>, React.ReactText> & {
    classes?: Partial<Record<"input" | "root" | "invalid", string>> | undefined;
}>;
export default StyledInputField;
export { StyledInputField as InputField };
