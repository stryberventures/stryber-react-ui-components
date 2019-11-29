declare const _default: (theme: any) => {
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
};
export default _default;
