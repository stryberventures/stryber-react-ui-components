import * as React from 'react';
import { WithStyles } from 'react-jss';
interface ButtonProps {
    onClick?: (e: React.SyntheticEvent) => void;
    disabled?: boolean;
    children: any;
    variant?: 'primary' | 'secondary';
    [key: string]: any;
}
declare const StyledButton: React.ComponentType<Pick<ButtonProps & React.HTMLProps<HTMLButtonElement> & WithStyles<(theme: any) => {
    root: {
        borderRadius: number;
        padding: number;
        border: string;
    };
    content: {
        fontSize: number;
        fontFamily: string;
    };
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
}>, React.ReactText> & {
    classes?: Partial<Record<"primary" | "secondary" | "disabled" | "content" | "root", string>> | undefined;
}>;
export default StyledButton;
export { StyledButton as Button };
