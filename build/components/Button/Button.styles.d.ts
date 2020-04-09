declare const _default: (theme: any) => {
    root: {
        borderRadius: number;
        padding: number;
        maxHeight: number;
        border: string;
        width: string;
        fontSize: number;
        fontFamily: any;
        fontWeight: any;
        userSelect: string;
        cursor: string;
    };
    disabled: {
        cursor: string;
    };
    /** Color variants */
    primary: {
        color: any;
        backgroundColor: any;
        '&:hover': {
            backgroundColor: any;
        };
        '&:active': {
            backgroundColor: any;
        };
        '&.disabled': {
            backgroundColor: any;
            color: any;
            borderColor: any;
            '&:hover': {
                backgroundColor: any;
            };
            '&:active': {
                backgroundColor: any;
            };
        };
    };
    secondary: {
        color: any;
        border: string;
        backgroundColor: any;
        '&:hover': {
            backgroundColor: any;
        };
        '&:active': {
            backgroundColor: any;
        };
        '&.disabled': {
            backgroundColor: any;
            color: any;
            borderColor: any;
            '&:hover': {
                backgroundColor: any;
            };
            '&:active': {
                backgroundColor: any;
            };
        };
    };
    tertiary: {
        display: string;
        fontFamily: any;
        fontWeight: any;
        fontSize: number;
        border: string;
        color: any;
        padding: number;
        '&:hover': {
            color: any;
        };
        '&:active': {
            color: any;
        };
        '&.disabled': {
            color: any;
            '&:hover': {
                textDecoration: string;
            };
        };
        '&::after': {
            content: string;
        };
    };
    /** Sizes */
    normal: {};
    mini: {
        padding: string;
        fontSize: number;
        fontWeight: any;
        borderRadius: number;
        maxHeight: number;
    };
};
export default _default;
