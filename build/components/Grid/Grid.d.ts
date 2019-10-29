import * as React from 'react';
import { WithStyles } from 'react-jss';
/** Row */
interface RowProps {
    children?: any;
    [key: string]: any;
}
/** Col */
interface ColProps {
    xl: number;
    lg: number;
    md: number;
    sm: number;
    xs: number;
    children?: any;
    [key: string]: any;
}
declare const StyledRow: React.ComponentType<Pick<RowProps & WithStyles<(theme: any) => {
    row: {
        display: string;
        gridGap: any;
        gridTemplateColumns: string;
        width: string;
    };
    col: {
        [x: string]: ((props: any) => string) | {
            gridColumnEnd: (props: any) => string;
        };
        gridColumnEnd: (props: any) => string;
    };
}>, React.ReactText> & {
    classes?: Partial<Record<"col" | "row", string>> | undefined;
}>;
declare const StyledCol: React.ComponentType<Pick<ColProps & WithStyles<(theme: any) => {
    row: {
        display: string;
        gridGap: any;
        gridTemplateColumns: string;
        width: string;
    };
    col: {
        [x: string]: ((props: any) => string) | {
            gridColumnEnd: (props: any) => string;
        };
        gridColumnEnd: (props: any) => string;
    };
}>, React.ReactText> & {
    classes?: Partial<Record<"col" | "row", string>> | undefined;
}>;
export { StyledRow as Row, StyledCol as Col, };
