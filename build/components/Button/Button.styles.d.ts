declare const _default: (theme: any) => {
    root: {
        border: string;
        width: string;
        fontFamily: any;
        fontWeight: any;
        fontSize: any;
        letterSpacing: any;
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
            filter: any;
        };
        '&:active': {
            backgroundColor: any;
        };
        '&.disabled': {
            backgroundColor: any;
            color: string;
            borderColor: any;
            '&:hover': {
                backgroundColor: any;
                filter: string;
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
            color: any;
        };
        '&:active': {
            backgroundColor: any;
        };
        '&.disabled': {
            backgroundColor: any;
            color: string;
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
        padding: string;
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
    };
    /** Sizes */
    large: {
        padding: string;
        maxHeight: number;
    };
    normal: {
        padding: string;
        maxHeight: number;
    };
    small: {
        padding: string;
        fontWeight: any;
        fontSize: any;
        letterSpacing: any;
        maxHeight: number;
    };
    mini: {
        padding: string;
        fontSize: number;
        fontWeight: any;
        borderRadius: number;
        maxHeight: number;
    };
    round: {
        borderRadius: number;
    };
    flat: {
        borderRadius: number;
    };
    circle: {
        borderRadius: number;
    };
};
export default _default;
