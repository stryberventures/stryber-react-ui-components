declare const _default: (theme: any) => {
    root: {
        position: string;
    };
    rootOpen: {
        zIndex: number;
    };
    /** Search icon */
    searchIcon: {
        fill: any;
    };
    searchIconSmall: {
        width: number;
    };
    /** Clear icon */
    clearIcon: {
        marginRight: number;
        width: number;
        fill: any;
    };
    clearIconMini: {
        marginRight: number;
        width: number;
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
    inputField: {
        cursor: string;
        userSelect: string;
        width: string;
        height: string;
        border: number;
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
        '&::placeholder': {
            color: any;
        };
    };
    inputFieldNormal: {
        padding: number;
    };
    inputFieldMini: {
        padding: number;
    };
    inputFieldWithPlaceholder: {
        paddingBottom: number;
        paddingTop: number;
    };
    inputFieldInvalid: {
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
    searchIconContainer: {
        display: string;
        alignItems: string;
        justifyContent: string;
        marginRight: number;
    };
    searchIconContainerMini: {
        marginRight: number;
    };
};
export default _default;
