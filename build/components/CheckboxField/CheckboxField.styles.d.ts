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
        fontWeight: any;
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
            borderWidth: number;
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
        minWidth: number;
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
            backgroundColor: any;
            boxShadow: string;
        };
    };
    /** Placeholder */
    placeholder: {
        padding: string;
    };
    placeholderInvalid: {
        color: any;
    };
    /** Error message */
    errorMessage: {
        color: any;
        fontFamily: any;
        fontWeight: any;
        fontSize: number;
    };
    /** Handle size */
    small: {
        fontSize: number;
        '& $checkmark': {
            height: number;
            width: number;
            '&:after': {
                left: number;
                top: number;
                width: number;
                height: number;
            };
        };
        '& $switch': {
            height: number;
            width: number;
            borderRadius: number;
            '&:after': {
                top: number;
                left: number;
                width: number;
                height: number;
            };
        };
        '& $input': {
            '&:checked ~ $switch:after': {
                left: number;
            };
        };
    };
    normal: {
        fontSize: number;
    };
    large: {
        fontSize: number;
        '& $checkmark': {
            height: number;
            width: number;
            '&:after': {
                left: number;
                top: number;
                width: number;
                height: number;
            };
        };
        '& $switch': {
            height: number;
            width: number;
            borderRadius: number;
            '&:after': {
                top: number;
                left: number;
                width: number;
                height: number;
            };
        };
        '& $input': {
            '&:checked ~ $switch:after': {
                left: number;
            };
        };
    };
    /** Handle error styles */
    error: {
        '& $checkmark': {
            border: string;
        };
        '& $input': {
            '&:checked ~ $checkmark': {
                backgroundColor: any;
            };
            '&:checked ~ $placeholder': {
                color: any;
            };
            '&:checked ~ $switch': {
                backgroundColor: any;
            };
        };
        '&:hover $input:checked ~ $checkmark': {
            backgroundColor: any;
        };
        '&:active $input:checked ~ $checkmark': {
            backgroundColor: any;
        };
        '&:hover $input:checked ~ $switch': {
            backgroundColor: any;
        };
        '&:active $input:checked ~ $switch': {
            backgroundColor: any;
        };
    };
};
export default _default;
