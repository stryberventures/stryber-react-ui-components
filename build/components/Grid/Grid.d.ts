/// <reference types="react" />
import { WithStyles } from 'react-jss';
/** Row */
export interface IRowProps {
    children?: any;
}
declare const Row: (props: IRowProps & WithStyles<(theme: any) => {
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
}>) => JSX.Element;
/** Col */
export interface IColProps {
    xl?: number;
    lg?: number;
    md?: number;
    sm?: number;
    xs?: number;
    children?: any;
}
declare const PropsWrappedStyledRow: (props: IRowProps) => JSX.Element;
declare const PropsWrappedStyledCol: (props: IColProps) => JSX.Element;
/** Exports */
export default Row;
export { PropsWrappedStyledRow as Row, PropsWrappedStyledCol as Col, };
