import * as React from 'react';
import { IInputFieldProps } from '../InputField';
import { WithStyles } from 'react-jss';
export interface IPasswordFieldProps {
    showPasswordByDefault?: boolean;
}
declare const StyledPasswordField: React.ComponentType<Pick<IPasswordFieldProps & IInputFieldProps & React.HTMLProps<HTMLInputElement> & WithStyles<(theme: any) => {
    root: {};
    append: {
        display: string;
        alignItems: string;
        justifyContent: string;
        width: number;
    };
    icon: {
        width: number;
        transition: string;
        fill: any;
        '&:hover': {
            fill: any;
        };
    };
}>, React.ReactText> & {
    classes?: Partial<Record<"root" | "append" | "icon", string>> | undefined;
}>;
export default StyledPasswordField;
export { StyledPasswordField as PasswordField };
