declare const _default: (theme: any) => {
    container: {
        [x: string]: any;
        backgroundColor: any;
        display: string;
        flexWrap: string;
        alignItems: string;
        padding: number;
        height: string;
        flexDirection: string;
    };
    item: {
        [x: string]: any;
        fontFamily: any;
        fontWeight: any;
        color: any;
        fontSize: number;
        padding: string;
        cursor: string;
        userSelect: string;
        textAlign: string;
        verticalAlign: string;
        transition: string;
        opacity: number;
        '&:hover': {
            color: any;
            opacity: number;
        };
        '&:active': {
            color: any;
            opacity: number;
        };
        margin: number;
        borderTop: string;
        borderBottom: string;
    };
    itemSelected: {
        color: any;
        opacity: number;
        '&:hover': {
            color: any;
        };
        '&:active': {
            color: any;
        };
        '&.underlined': {
            borderBottom: string;
        };
    };
};
export default _default;
