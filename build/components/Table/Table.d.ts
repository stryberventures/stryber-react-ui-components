import * as React from 'react';
import { WithStyles } from 'react-jss';
interface ITableProps {
    children?: any;
    className?: any;
    headerComponent?: any;
    border?: boolean;
    headerLabel?: string;
}
declare const StyledTable: React.ComponentType<Pick<ITableProps & WithStyles<(theme: any) => {
    root: {
        '&.withBorder': {
            border: any;
            borderRadius: number;
            boxShadow: any;
        };
    };
    table: {
        borderSpacing: number;
        fontSize: number;
        textAlign: string;
        width: string;
    };
    header: {
        display: string;
        height: number;
    };
    headerLabel: {
        paddingLeft: number;
        paddingTop: number;
        fontSize: number;
        color: any;
        whiteSpace: string;
    };
    headerComponent: {
        width: string;
        display: string;
        justifyContent: string;
        alignItems: string;
    };
}>, "children" | "className" | "headerComponent" | "border" | "headerLabel"> & {
    classes?: Partial<Record<"headerComponent" | "headerLabel" | "root" | "table" | "header", string>> | undefined;
}>;
export default StyledTable;
export { StyledTable as Table };
