import * as React from 'react';
import { WithStyles } from 'react-jss';
interface PaginationProps {
    currPage: number;
    pageCount: number;
    onChange: (index: number) => void;
    collapseFactor?: number;
    className?: string;
}
declare const StyledPagination: React.MemoExoticComponent<React.ComponentType<Pick<PaginationProps & WithStyles<(theme: any) => {
    root: {
        userSelect: string;
        display: string;
    };
    item: {
        width: number;
        height: number;
        backgroundColor: any;
        fontSize: number;
        color: any;
        borderRadius: number;
        margin: number;
        textAlign: string;
        lineHeight: string;
        cursor: string;
    };
    active: {
        backgroundColor: any;
        color: any;
    };
    disabled: {
        cursor: string;
        pointerEvents: string;
        '&:before': {
            opacity: number;
        };
    };
    widthAuto: {
        width: string;
        padding: string;
    };
    arrow: {
        display: string;
        alignItems: string;
        justifyContent: string;
        '&:before': {
            content: string;
            display: string;
            width: number;
            height: number;
            borderLeft: string;
            borderBottom: string;
            borderRadius: number;
        };
    };
    leftArrow: {
        '&:before': {
            transform: string;
            marginLeft: number;
        };
    };
    rightArrow: {
        '&:before': {
            transform: string;
            marginRight: number;
        };
    };
}>, "currPage" | "pageCount" | "onChange" | "collapseFactor" | "className"> & {
    classes?: Partial<Record<"root" | "item" | "active" | "disabled" | "widthAuto" | "arrow" | "leftArrow" | "rightArrow", string>> | undefined;
}>>;
export default StyledPagination;
