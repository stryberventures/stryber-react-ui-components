declare const _default: (theme: any) => {
    /** Root Wrapper */
    root: {
        position: string;
        maxHeight: any;
        borderRadius: number;
        overflow: string;
        border: string;
        transition: string;
        backgroundColor: any;
        display: string;
        justifyContent: string;
        '&:focus-within': {
            border: string;
            outline: string;
        };
    };
    rootInvalid: {
        border: string;
    };
    rootDisabled: {
        backgroundColor: string;
    };
    fieldWrapper: {
        flex: number;
        position: string;
    };
    /** Append */
    append: {
        display: string;
        alignItems: string;
        justifyContent: string;
    };
    /** Error message */
    errorMessage: {
        color: any;
        fontFamily: any;
        fontWeight: any;
        fontSize: number;
    };
    label: {
        fontSize: number;
        marginBottom: number;
        color: any;
        '&.error': {
            color: any;
        };
        '&.disabledLabel': {
            color: string;
        };
    };
    large: {
        '& $root': {
            maxHeight: any;
        };
        '& $label': {
            fontSize: number;
        };
    };
};
export default _default;
