import * as React from 'react';
import { WithStyles } from 'react-jss';
interface TableProps {
    rows: any[];
    headRow: {
        label: string;
        id: string;
    }[];
    headerLabel: string;
    perPage?: number;
    currPage?: number;
}
declare const StyledTable: React.ComponentType<Pick<TableProps & WithStyles<(theme: any) => {
    root: {
        width: string;
        border: any;
        borderRadius: number;
        boxShadow: any;
    };
    header: {
        height: number;
    };
    headerLabel: {
        paddingLeft: number;
        paddingTop: number;
        fontSize: number;
        color: any;
    };
    table: {
        width: string;
        textAlign: string;
        color: any;
        fontSize: number;
        borderSpacing: number;
        '& th': {
            borderBottom: string;
        };
    };
    tableHead: {
        borderBottom: any;
    };
    row: {
        height: number;
        '&:nth-child(even)': {
            backgroundColor: any;
        };
    };
    cell: {
        padding: string;
        '&:first-child': {
            paddingLeft: number;
        };
    };
}>, "rows" | "headRow" | "headerLabel" | "perPage" | "currPage"> & {
    classes?: Partial<Record<"headerLabel" | "root" | "header" | "table" | "tableHead" | "row" | "cell", string>> | undefined;
}>;
export default StyledTable;
export { StyledTable as Table };
