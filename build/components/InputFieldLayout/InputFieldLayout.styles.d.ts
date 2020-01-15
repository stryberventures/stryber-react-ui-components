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
        overflow: string;
        textOverflow: string;
        whiteSpace: string;
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
        fill: string;
        backgroundColor: string;
    };
    prependMargin: {
        marginRight: number;
    };
    prependInvalid: {
        fill: string;
        backgroundColor: string;
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
    prependBackgroundColor: {
        backgroundColor: any;
        fill: any;
    };
    prependBackgroundIcon: {
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
