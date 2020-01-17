import * as React from "react";
import { WithStyles } from 'react-jss';
interface IDropDownFieldProps {
    placeholder: string;
    children: any;
    appendContent?: any;
    onClose?: () => void;
    disabled?: boolean;
    className?: string;
}
declare const _default: React.ComponentType<Pick<IDropDownFieldProps & WithStyles<(theme: any) => {
    root: {
        position: string;
        cursor: string;
    };
    rootOpen: {
        zIndex: number;
    };
    input: {
        height: number;
    };
    clickaway: {
        zIndex: number;
        position: string;
        top: number;
        left: number;
        bottom: number;
        right: number;
    };
    dropdownWrapper: {
        position: string;
        top: string;
        width: string;
        padding: number;
        boxShadow: string;
        borderRadius: number;
        border: string;
        backgroundColor: any;
    };
    dropdownArrow: {
        transition: string;
        fill: any;
        width: number;
        height: number;
        marginRight: number;
    };
    dropdownArrowOpen: {
        transform: string;
    };
    dropdownArrowFocused: {
        fill: any;
    };
}>, "placeholder" | "children" | "appendContent" | "onClose" | "disabled" | "className"> & {
    classes?: Partial<Record<"root" | "rootOpen" | "input" | "clickaway" | "dropdownWrapper" | "dropdownArrow" | "dropdownArrowOpen" | "dropdownArrowFocused", string>> | undefined;
}>;
export default _default;
