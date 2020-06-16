declare const _default: (theme: any) => {
    root: {
        color: string;
        padding: string;
        backgroundColor: any;
        fontSize: number;
        marginRight: number;
    };
    closeBlock: {
        display: string;
        marginLeft: number;
        cursor: string;
    };
    flat: {};
    round: {
        borderRadius: number;
    };
    circle: {
        borderRadius: number;
    };
    normal: {
        maxHeight: number;
    };
    small: {
        padding: string;
        '& $closeBlock': {
            marginLeft: number;
        };
        maxHeight: number;
    };
    large: {
        padding: string;
        fontSize: number;
    };
};
export default _default;
