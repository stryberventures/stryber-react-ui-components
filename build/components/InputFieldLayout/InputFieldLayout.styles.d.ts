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
    /** Placeholder */
    placeholder: {
        pointerEvents: string;
        userSelect: string;
        position: string;
        transition: string;
        fontSize: number;
        overflow: string;
        textOverflow: string;
        whiteSpace: string;
        width: string;
        height: string;
        margin: number;
        transform: string;
        transformOrigin: string;
        color: any;
    };
    placeholderFontFamily: {
        fontFamily: any;
        fontWeight: any;
    };
    placeholderNormal: {
        padding: number;
    };
    placeholderMini: {
        lineHeight: string;
    };
    placeholderInvalid: {};
    placeholderCollapsed: {
        fontSize: number;
        transform: string;
        fontWeight: any;
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
    prependContentMicro: {
        display: string;
        alignItems: string;
        justifyContent: string;
        height: string;
        padding: number;
        color: any;
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
