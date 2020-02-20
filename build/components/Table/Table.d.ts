import * as React from 'react';
interface ITableProps {
    children?: any;
    className: any;
    headerComponent?: any;
    border?: boolean;
    headerLabel?: string;
}
declare const PropsWrappedStyledTable: (props: ITableProps & React.HTMLProps<HTMLButtonElement>) => JSX.Element;
/** Exports */
export default PropsWrappedStyledTable;
export { PropsWrappedStyledTable as Table, };
