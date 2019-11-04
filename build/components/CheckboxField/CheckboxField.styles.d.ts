declare const _default: (theme: any) => {
    wrapper: {
        display: string;
        flexDirection: string;
    };
    /** Root Wrapper */
    root: {
        transition: string;
        position: string;
        cursor: string;
        userSelect: string;
        color: any;
        fontFamily: any;
        fontSize: number;
        display: string;
        alignItems: string;
        /** Checkmark */
        '&:hover $input ~ $checkmark': {
            backgroundColor: any;
        };
        '&:active $input ~ $checkmark': {
            backgroundColor: any;
        };
        '&:hover $input:checked ~ $checkmark': {
            backgroundColor: any;
        };
        '&:active $input:checked ~ $checkmark': {
            backgroundColor: any;
        };
        /** Switch */
        '&:hover $input ~ $switch': {
            backgroundColor: any;
        };
        '&:active $input ~ $switch': {
            backgroundColor: any;
        };
        '&:hover $input:checked ~ $switch': {
            backgroundColor: any;
        };
        '&:active $input:checked ~ $switch': {
            backgroundColor: any;
        };
    };
    /** Input */
    input: {
        position: string;
        opacity: number;
        cursor: string;
        backgroundColor: any;
        /** Placeholder */
        '&:checked ~ $placeholder': {
            color: any;
        };
        '&:disabled ~ $placeholder': {
            color: any;
        };
        /** Checkmark */
        '&:checked ~ $checkmark': {
            backgroundColor: any;
        };
        '&:checked ~ $checkmark:after': {
            display: string;
        };
        '&:disabled ~ $checkmark': {
            backgroundColor: string;
        };
        /** Switch */
        '&:checked ~ $switch': {
            backgroundColor: any;
        };
        '&:checked ~ $switch:after': {
            left: number;
        };
        '&:disabled ~ $switch': {
            backgroundColor: string;
        };
    };
    /** Checkmark box */
    checkmark: {
        position: string;
        top: number;
        left: number;
        height: number;
        width: number;
        backgroundColor: any;
        borderRadius: number;
        border: string;
        /** Checkmark */
        '&:after': {
            content: string;
            position: string;
            display: string;
            left: number;
            top: number;
            width: number;
            height: number;
            border: string;
            borderWidth: string;
            transform: string;
        };
    };
    /** Switch container */
    switch: {
        overflow: string;
        position: string;
        top: number;
        left: number;
        height: number;
        width: number;
        backgroundColor: any;
        borderRadius: number;
        border: string;
        /** Switch */
        '&:after': {
            transition: string;
            content: string;
            position: string;
            display: string;
            top: number;
            left: number;
            width: number;
            height: number;
            borderRadius: string;
            backgroundColor: string;
            boxShadow: string;
        };
    };
    /** Placeholder */
    placeholder: {
        padding: number;
    };
    /** Error message */
    errorMessage: {
        color: any;
        fontFamily: any;
        fontSize: number;
    };
};
export default _default;
