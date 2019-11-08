/// <reference types="react" />
/** Row */
export interface IRowProps {
    children?: any;
}
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
export { PropsWrappedStyledRow as Row, PropsWrappedStyledCol as Col, };
