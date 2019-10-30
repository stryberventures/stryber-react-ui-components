declare const _default: (theme: any) => {
    /** Row */
    row: {
        display: string;
        gridGap: any;
        gridTemplateColumns: string;
        width: string;
    };
    /** Column */
    col: {
        [x: string]: ((props: any) => string) | {
            gridColumnEnd: (props: any) => string;
        };
        gridColumnEnd: (props: any) => string;
    };
};
export default _default;
