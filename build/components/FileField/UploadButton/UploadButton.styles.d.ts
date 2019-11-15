declare const _default: (theme: any) => {
    uploadButton: {
        marginRight: number;
        padding: string;
        borderRadius: number;
        fontSize: number;
        fontWeight: number;
        lineHeight: string;
        cursor: string;
        '&.fileNotSelected': {
            color: string;
            border: string;
            backgroundColor: string;
            '&.error': {
                borderColor: any;
                color: any;
            };
        };
        '&.disabled': {
            borderColor: any;
            color: any;
        };
        '&.fileSelected': {
            color: string;
            border: string;
            backgroundColor: string;
            '&.error': {
                borderColor: any;
                backgroundColor: any;
            };
        };
    };
};
export default _default;
