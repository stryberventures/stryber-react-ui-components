"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (theme) { return ({
    '@global': {
        '@font-face': [
            {
                fontFamily: 'galano-regular',
                src: "url('fonts/Galano-Grotesque.woff') format('woff')",
            },
        ],
        html: {
            height: '100%',
            fontSize: '60%',
        },
        body: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.5,
            textAlign: 'left',
            fontFamily: 'galano-regular',
            height: '100%',
            width: '100%',
            padding: 0,
            margin: 0,
            backgroundColor: theme.backgroundColorSecondary,
            color: theme.textColorPrimary,
        },
        h1: {
            fontSize: '35px',
            fontFamily: 'avenir-black',
        },
        h2: {
            fontSize: '28px',
            fontFamily: 'avenir-medium',
        },
        h3: {
            fontSize: '21px',
            fontFamily: 'avenir-medium',
        },
        h4: {
            fontSize: '14px',
            fontFamily: 'avenir-light',
        },
        'h1, h2, h3, h4, h5, h6': {
            marginTop: 0,
            marginBottom: '.5rem',
        },
        '.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6': {
            marginBottom: '.5rem',
            fontWeight: 500,
            lineHeight: 1.2,
        },
        p: {
            marginTop: 0,
            marginBottom: '1rem',
        },
        b: {
            fontFamily: 'avenir-black',
        },
        '#root': {
            height: '100%',
        },
        'button:focus': {
            outline: 'none'
        },
        '*, ::after, ::before': {
            boxSizing: 'border-box',
        },
        a: {
            color: '#007bff',
            textDecoration: 'none',
            '&:hover': {
                textDecoration: 'underline',
            }
        },
    },
}); });
//# sourceMappingURL=globalStyles.js.map