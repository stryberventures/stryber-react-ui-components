declare const _default: (theme: any) => {
    root: {
        width: string;
        padding: number;
    };
    slider: {
        '--webkitProgressPercent': string;
        '-webkit-appearance': string;
        '-moz-appearance': string;
        appearance: string;
        width: string;
        height: any;
        background: any;
        outline: string;
        borderRadius: number;
        margin: number;
        padding: number;
        '&::-webkit-slider-thumb': {
            '-webkit-appearance': string;
            appearance: string;
            width: any;
            height: any;
            background: string;
            cursor: string;
            marginTop: number;
            borderRadius: number;
            boxShadow: string;
        };
        '&::-moz-range-thumb': {
            '-moz-appearance': string;
            appearance: string;
            width: any;
            height: any;
            background: string;
            cursor: string;
            marginTop: number;
            borderRadius: number;
            boxShadow: string;
        };
        '&::-ms-thumb': {
            '-ms-appearance': string;
            appearance: string;
            width: any;
            height: any;
            background: string;
            cursor: string;
            marginTop: number;
            borderRadius: number;
            boxShadow: string;
        };
        '&::-webkit-slider-runnable-track': {
            height: any;
            backgroundImage: string;
            borderRadius: number;
        };
        '&::-moz-range-progress': {
            height: any;
            backgroundColor: any;
            borderRadius: number;
        };
        '&::-ms-fill-lower': {
            height: any;
            backgroundColor: any;
            borderRadius: number;
        };
        '&::-moz-focus-outer': {
            border: number;
        };
    };
    error: {
        color: any;
        fontFamily: any;
        fontWeight: any;
        fontSize: number;
        marginTop: number;
    };
    normal: {
        minWidth: number;
        '& $slider': {
            minWidth: number;
        };
    };
    small: {
        minWidth: number;
        '& $slider': {
            minWidth: number;
            height: any;
            '&::-webkit-slider-thumb': {
                width: any;
                height: any;
                marginTop: number;
            };
            '&::-moz-range-thumb': {
                width: any;
                height: any;
                marginTop: number;
            };
            '&::-ms-thumb': {
                width: any;
                height: any;
                marginTop: number;
            };
            '&::-webkit-slider-runnable-track': {
                height: any;
            };
            '&::-moz-range-progress': {
                height: any;
            };
            '&::-ms-fill-lower': {
                height: any;
            };
        };
    };
    large: {
        minWidth: number;
        '& $slider': {
            minWidth: number;
            height: any;
            borderRadius: number;
            '&::-webkit-slider-thumb': {
                width: any;
                height: any;
                marginTop: number;
                borderRadius: number;
            };
            '&::-moz-range-thumb': {
                width: any;
                height: any;
                marginTop: number;
                borderRadius: number;
            };
            '&::-ms-thumb': {
                width: any;
                height: any;
                marginTop: number;
                borderRadius: number;
            };
            '&::-webkit-slider-runnable-track': {
                height: any;
                borderRadius: number;
            };
            '&::-moz-range-progress': {
                height: any;
                borderRadius: number;
            };
            '&::-ms-fill-lower': {
                height: any;
                borderRadius: number;
            };
        };
    };
};
export default _default;
