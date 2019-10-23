declare const _default: (theme: any) => {
    '@global': {
        '@font-face': {
            fontFamily: string;
            src: string;
        }[];
        html: {
            height: string;
            fontSize: string;
        };
        body: {
            fontSize: string;
            fontWeight: number;
            lineHeight: number;
            textAlign: string;
            fontFamily: string;
            height: string;
            width: string;
            padding: number;
            margin: number;
            backgroundColor: any;
            color: any;
        };
        h1: {
            fontSize: string;
            fontFamily: string;
        };
        h2: {
            fontSize: string;
            fontFamily: string;
        };
        h3: {
            fontSize: string;
            fontFamily: string;
        };
        h4: {
            fontSize: string;
            fontFamily: string;
        };
        'h1, h2, h3, h4, h5, h6': {
            marginTop: number;
            marginBottom: string;
        };
        '.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6': {
            marginBottom: string;
            fontWeight: number;
            lineHeight: number;
        };
        p: {
            marginTop: number;
            marginBottom: string;
        };
        b: {
            fontFamily: string;
        };
        '#root': {
            height: string;
        };
        'button:focus': {
            outline: string;
        };
        '*, ::after, ::before': {
            boxSizing: string;
        };
        a: {
            color: string;
            textDecoration: string;
            '&:hover': {
                textDecoration: string;
            };
        };
    };
};
export default _default;
