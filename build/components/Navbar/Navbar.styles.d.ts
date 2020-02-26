declare const _default: (theme: any) => {
    navbar: {
        position: string;
        minHeight: number;
        backgroundColor: any;
        width: string;
        boxShadow: string;
        display: string;
        alignItems: string;
        justifyContent: string;
        flexWrap: string;
    };
    section: {
        padding: string;
    };
    align: {
        [x: string]: string | number | {
            minWidth: string;
            justifyContent?: undefined;
        } | {
            [x: string]: string | {
                justifyContent: string;
            };
            justifyContent: string;
            minWidth?: undefined;
        };
        display: string;
        flexDirection: string;
        alignItems: string;
        flex: number;
        /** Different align logic */
        '&.left': {
            [x: string]: string | {
                justifyContent: string;
            };
            justifyContent: string;
        };
        '&.center': {
            justifyContent: string;
        };
        '&.right': {
            [x: string]: string | {
                justifyContent: string;
            };
            justifyContent: string;
        };
    };
};
export default _default;
