import * as React from "react";
import { WithStyles } from 'react-jss';
interface IDropDownFieldProps {
    placeholder: string;
    children: React.ReactNode;
    appendContent?: any;
    onClose?: () => void;
    disabled?: boolean;
    className?: string;
    sizeVariant?: 'normal' | 'mini';
    customPlaceholderFont?: boolean;
    placeholderClassName?: string;
}
declare const _default: React.ComponentType<Pick<IDropDownFieldProps & WithStyles<(theme: any) => {
    root: {
        position: string;
        cursor: string;
    };
    rootOpen: {
        zIndex: number;
    };
    inputNormal: {
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
        boxShadow: string;
        borderRadius: number;
        border: string;
        backgroundColor: any;
    };
    dropdownWrapperNormal: {
        padding: number;
    };
    dropdownWrapperMini: {
        padding: number;
    };
    dropdownArrow: {
        transition: string;
        fill: any;
        width: number;
        height: number;
    };
    dropdownArrowNormal: {
        marginRight: number;
    };
    dropdownArrowOpen: {
        transform: string;
    };
    dropdownArrowFocused: {
        fill: any;
    };
}>, "placeholder" | "children" | "appendContent" | "onClose" | "disabled" | "className" | "sizeVariant" | "customPlaceholderFont" | "placeholderClassName"> & {
    classes?: Partial<Record<"root" | "rootOpen" | "inputNormal" | "clickaway" | "dropdownWrapper" | "dropdownWrapperNormal" | "dropdownWrapperMini" | "dropdownArrow" | "dropdownArrowNormal" | "dropdownArrowOpen" | "dropdownArrowFocused", string>> | undefined;
}>;
export default _default;
