declare const _default: (theme: any) => {
    root: {
        position: string;
    };
    rootOpen: {
        zIndex: number;
    };
    /** Dropdown arrow */
    dropdownArrow: {
        transition: string;
        fill: any;
        width: number;
        height: number;
        marginRight: number;
    };
    dropdownArrowOpen: {
        transform: string;
    };
    dropdownArrowFocused: {
        fill: any;
    };
    /** Selected values Wrapper */
    selectElement: {
        position: string;
        width: string;
        height: string;
        backgroundColor: string;
        border: number;
        '-moz-appearance': string;
        '-webkit-appearance': string;
        '&:focus': {
            outline: string;
        };
    };
    selectLabel: {
        cursor: string;
        userSelect: string;
        width: string;
        height: string;
        border: number;
        padding: number;
        backgroundColor: any;
        transition: string;
        color: any;
        fontFamily: any;
        fontWeight: any;
        fontSize: number;
        '&:focus': {
            color: any;
            outline: string;
        };
        '&:after': {
            content: string;
            visibility: string;
        };
    };
    selectLabelWithPlaceholder: {
        paddingBottom: number;
        paddingTop: number;
    };
    selectLabelInvalid: {
        '&:focus': {
            color: string;
        };
    };
    /** Dropdown */
    dropdownWrapper: {
        position: string;
        top: string;
        width: string;
        paddingTop: number;
        paddingBottom: number;
        boxShadow: string;
        borderRadius: number;
        border: string;
        backgroundColor: any;
    };
    dropdownItem: {
        padding: string;
        userSelect: string;
        cursor: string;
        color: any;
        fontFamily: any;
        fontWeight: any;
        fontSize: number;
    };
    dropdownItemHover: {
        backgroundColor: string;
    };
    dropdownItemSelected: {
        backgroundColor: any;
    };
    /** Clickaway */
    clickaway: {
        zIndex: number;
        position: string;
        top: number;
        left: number;
        bottom: number;
        right: number;
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
