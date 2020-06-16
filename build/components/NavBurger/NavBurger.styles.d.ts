declare const _default: () => {
    root: {
        width: number;
        height: number;
        position: string;
        cursor: string;
        display: string;
    };
    navburgerWrapper: {
        width: string;
        height: string;
        display: string;
        alignItems: string;
        justifyContent: string;
    };
    octagonInner: {
        transform: string;
        opacity: number;
        cursor: string;
    };
    octagon: {
        overflow: string;
        display: string;
        margin: string;
        width: string;
        height: string;
        transform: string;
        borderRadius: string;
        '& *, *:before': {
            display: string;
            overflow: string;
            width: string;
            height: string;
            borderRadius: string;
        };
        '&:first-child $octagonInner:before, $image': {
            transform: string;
            background: string;
            opacity: number;
            content: string;
        };
    };
    octagonWrapper: {
        width: string;
        height: string;
        position: string;
        left: number;
        top: number;
    };
};
export default _default;
