declare const _default: (theme: any) => {
    root: {
        position: string;
        borderRadius: number;
        overflow: string;
        border: string;
        transition: string;
        display: string;
        justifyContent: string;
        '&:focus-within': {
            border: string;
            outline: string;
        };
    };
    invalidRoot: {
        border: string;
    };
    input: {
        flex: number;
        width: string;
        height: string;
        border: number;
        padding: number;
        fontFamily: string;
        fontSize: number;
        '&:focus': {
            outline: string;
        };
    };
    prepend: {
        transition: string;
        position: string;
        backgroundColor: string;
        minWidth: number;
    };
    invalidPrepend: {
        backgroundColor: string;
    };
    append: {};
    errorMessage: {
        color: string;
        fontFamily: string;
        fontSize: number;
    };
};
export default _default;
