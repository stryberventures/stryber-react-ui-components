declare const _default: (theme: any) => {
    /** Root Wrapper */
    root: {
        position: string;
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
    /** Placeholder */
    placeholder: {
        pointerEvents: string;
        userSelect: string;
        position: string;
        transition: string;
        fontSize: number;
        fontFamily: any;
        fontWeight: any;
        color: any;
        width: string;
        height: string;
        padding: number;
        margin: number;
        transform: string;
        transformOrigin: string;
    };
    placeholderInvalid: {};
    placeholderCollapsed: {
        fontSize: number;
        transform: string;
    };
    /** Prepend */
    prepend: {
        transition: string;
        position: string;
        backgroundColor: any;
        fill: any;
        minWidth: number;
        overflow: string;
        display: string;
        alignItems: string;
        justifyContent: string;
        zIndex: number;
        '& + $input:disabled': {
            fill: any;
            backgroundColor: any;
        };
    };
    prependDisabled: {
        fill: any;
        backgroundColor: any;
    };
    prependMargin: {
        marginRight: number;
    };
    prependInvalid: {
        fill: any;
        backgroundColor: any;
    };
    prependContent: {
        display: string;
        alignItems: string;
        justifyContent: string;
        color: any;
        padding: number;
        paddingLeft: number;
        height: string;
    };
    prependBackground: {
        right: number;
        zIndex: number;
        position: string;
        height: string;
    };
    /** Append */
    append: {
        display: string;
        alignItems: string;
        justifyContent: string;
        paddingLeft: number;
    };
    /** Error message */
    errorMessage: {
        color: any;
        fontFamily: any;
        fontWeight: any;
        fontSize: number;
    };
};
export default _default;
