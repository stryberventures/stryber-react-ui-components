declare const _default: (theme: any) => {
    '@global': {
        '@font-face': {
            fontFamily: string;
            src: string;
        }[];
        html: {
            height: string;
            width: string;
        };
        body: {
            fontFamily: string;
            height: string;
            width: string;
            padding: number;
            margin: number;
            backgroundColor: any;
            color: any;
        };
        h1: {
            fontSize: number;
            fontFamily: string;
        };
        h2: {
            fontSize: number;
            fontFamily: string;
        };
        h3: {
            fontSize: number;
            fontFamily: string;
        };
        h4: {
            fontSize: number;
            fontFamily: string;
        };
        p: {
            fontSize: number;
            fontFamily: string;
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
