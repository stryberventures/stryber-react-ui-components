import * as React from 'react';
import { WithStyles } from 'react-jss';
interface ButtonProps {
    onClick?: (e: React.SyntheticEvent) => void;
    disabled?: boolean;
    children: any;
    variant?: 'primary' | 'secondary';
}
declare const StyledButton: React.ComponentType<Pick<ButtonProps & WithStyles<(theme: any) => {
    root: {
        borderRadius: number;
        padding: number;
        maxHeight: number;
        border: string;
    };
    content: {};
    disabled: {
        backgroundColor: any;
    };
    primary: {
        color: any;
        backgroundColor: any;
        '&:hover': {
            backgroundColor: any;
        };
        '&:active': {
            backgroundColor: any;
        };
    };
    secondary: {
        color: any;
        border: string;
        backgroundColor: any;
        '&:hover': {
            backgroundColor: any;
        };
        '&:active': {
            backgroundColor: any;
        };
    };
}>, "disabled" | "children" | "onClick" | "variant"> & {
    classes?: Partial<Record<"primary" | "secondary" | "root" | "content" | "disabled", string>> | undefined;
}>;
export default StyledButton;
export { StyledButton as Button };
