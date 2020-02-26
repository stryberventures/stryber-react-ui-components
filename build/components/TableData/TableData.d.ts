/// <reference types="react" />
interface ITableDataProps {
    rows: any[];
    headerComponent?: any;
    headerLabel?: string;
    headRow: {
        label: string;
        id: string;
    }[];
    perPage?: number;
    currPage?: number;
    className?: any;
}
declare const TableData: (props: ITableDataProps) => JSX.Element;
export default TableData;
export { TableData };
