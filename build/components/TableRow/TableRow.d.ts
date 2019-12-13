import * as React from 'react';
import { WithStyles } from 'react-jss';
interface ITableRowProps {
    children?: any;
    className?: any;
}
declare const StyledTable: React.ComponentType<Pick<ITableRowProps & WithStyles<(theme: any) => {
    root: {
        height: number;
        '&:nth-child(even)': {
            backgroundColor: any;
        };
    };
}>, "children" | "className"> & {
    classes?: Partial<Record<"root", string>> | undefined;
}>;
export default StyledTable;
export { StyledTable as TableRow };
