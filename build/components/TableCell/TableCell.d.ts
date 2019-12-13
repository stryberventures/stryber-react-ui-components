import * as React from 'react';
import { WithStyles } from 'react-jss';
interface ITableCellProps {
    children?: any;
    className?: any;
    component?: any;
}
declare const StyledTable: React.ComponentType<Pick<ITableCellProps & WithStyles<(theme: any) => {
    root: {
        padding: string;
        '&:first-child': {
            paddingLeft: number;
        };
        '&:last-child': {
            paddingRight: number;
        };
        'th&': {
            whiteSpace: string;
            fontWeight: string;
            borderBottom: string;
        };
    };
}>, "children" | "className" | "component"> & {
    classes?: Partial<Record<"root", string>> | undefined;
}>;
export default StyledTable;
export { StyledTable as TableCell };
