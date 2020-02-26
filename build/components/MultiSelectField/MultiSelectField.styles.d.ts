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
    };
    dropdownArrowNormal: {
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
        display: string;
        flexDirection: string;
        flexWrap: string;
        cursor: string;
        userSelect: string;
        width: string;
        height: string;
        border: number;
        transition: string;
        '&:focus': {
            color: any;
            outline: string;
        };
        '&:after': {
            content: string;
            visibility: string;
        };
    };
    selectLabelNormal: {
        fontFamily: any;
        fontWeight: any;
        color: any;
        padding: number;
        minHeight: number;
        backgroundColor: any;
        fontSize: number;
    };
    selectLabelWithPlaceholder: {
        paddingBottom: number;
        paddingTop: number;
    };
    selectLabelMini: {
        padding: number;
        height: number;
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
        boxShadow: string;
        borderRadius: number;
        border: string;
        backgroundColor: any;
        overflowY: string;
    };
    dropdownWrapperNormal: {
        paddingTop: number;
        paddingBottom: number;
        maxHeight: number;
    };
    dropdownWrapperMini: {
        maxHeight: number;
    };
    dropdownSearchItemsWrapper: {
        overflowY: string;
    };
    dropdownSearchItemsWrapperNormal: {
        maxHeight: number;
    };
    dropdownSearchItemsWrapperMini: {
        maxHeight: number;
    };
    dropdownItem: {
        paddingLeft: number;
        paddingRight: number;
        userSelect: string;
        cursor: string;
        color: any;
        fontFamily: any;
        fontWeight: any;
        fontSize: number;
        '&:hover': {
            backgroundColor: string;
        };
    };
    dropdownItemMini: {
        paddingLeft: number;
        paddingRight: number;
        '& div': {
            padding: number;
        };
        '& label': {
            fontFamily: string;
            fontWeight: string;
        };
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
