/// <reference types="react" />
interface ITableProps {
    children?: any;
    className?: any;
    headerComponent?: any;
    border?: boolean;
    headerLabel?: string;
}
declare const PropsWrappedStyledTable: (props: ITableProps) => JSX.Element;
export default PropsWrappedStyledTable;
export { PropsWrappedStyledTable as Table };
