import * as React from 'react';
import { WithStyles } from 'react-jss';
interface PaginationProps {
    currPage: number;
    pageCount: number;
    onChange: (index: number) => void;
    collapseFactor?: number;
}
declare const StyledTable: React.ComponentType<Pick<PaginationProps & WithStyles<(theme: any) => {
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
        };
    };
    rightArrow: {
        '&:before': {
            transform: string;
        };
    };
}>, "currPage" | "pageCount" | "onChange" | "collapseFactor"> & {
    classes?: Partial<Record<"root" | "item" | "active" | "disabled" | "arrow" | "leftArrow" | "rightArrow", string>> | undefined;
}>;
export default StyledTable;
export { StyledTable as Pagination };
