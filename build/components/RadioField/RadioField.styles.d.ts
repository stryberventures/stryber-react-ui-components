declare const _default: (theme: any) => {
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
    };
    input: {
        position: string;
        opacity: number;
        cursor: string;
        backgroundColor: any;
        '&:checked ~ $checkmark': {
            backgroundColor: any;
            borderWidth: number;
        };
        '&:checked ~ $checkmark:after': {
            display: string;
        };
        '&:checked ~ $placeholder': {
            color: any;
        };
        '&:disabled ~ $placeholder': {
            color: any;
        };
        '&:disabled ~ $checkmark': {
            backgroundColor: string;
        };
    };
    checkmark: {
        position: string;
        top: number;
        left: number;
        height: number;
        width: number;
        backgroundColor: any;
        borderRadius: string;
        border: string;
        '&:after': {
            content: string;
            position: string;
            display: string;
            top: number;
            left: number;
            width: number;
            height: number;
            borderRadius: string;
            backgroundColor: string;
        };
    };
    placeholder: {
        padding: string;
    };
    small: {
        fontSize: number;
        '& $checkmark': {
            height: number;
            width: number;
            '&:after': {
                top: number;
                left: number;
                width: number;
                height: number;
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
                top: number;
                left: number;
                width: number;
                height: number;
            };
        };
    };
    /** Handle error message */
    errorMessage: {
        color: any;
        fontFamily: any;
        fontWeight: any;
        fontSize: number;
    };
    error: {
        '& $root': {
            '&:hover $input:checked ~ $checkmark': {
                backgroundColor: any;
            };
            '&:active $input:checked ~ $checkmark': {
                backgroundColor: any;
            };
        };
        '& $input': {
            '&:checked ~ $checkmark': {
                backgroundColor: any;
            };
            '&:checked ~ $placeholder': {
                color: any;
            };
        };
        '& $checkmark': {
            border: string;
        };
        '& $placeholder': {
            color: any;
        };
    };
};
export default _default;
