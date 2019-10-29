"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (theme) { return ({
    '@global': {
        '@font-face': [
            {
                fontFamily: 'galano-regular',
                src: "url('fonts/Galano-Grotesque.otf')",
            },
            {
                fontFamily: 'galano-medium',
                src: "url('fonts/Galano-Grotesque-Medium.otf')",
            },
            {
                fontFamily: 'galano-semibold',
                src: "url('fonts/Galano-Grotesque-Semi-Bold.otf')",
            },
            {
                fontFamily: 'galano-bold',
                src: "url('fonts/Galano-Grotesque-Bold.otf')",
            },
        ],
        html: {
            height: '100%',
            width: '100%',
        },
        body: {
            // fontSize: '1rem',
            // fontWeight: 400,
            // lineHeight: 1.5,
            // textAlign: 'left',
            fontFamily: 'galano-regular',
            height: '100%',
            width: '100%',
            padding: 0,
            margin: 0,
            backgroundColor: theme.backgroundColorSecondary,
            color: theme.textColorPrimary,
        },
        h1: {
            fontSize: 42,
            fontFamily: 'galano-bold',
        },
        h2: {
            fontSize: 32,
            fontFamily: 'galano-bold',
        },
        h3: {
            fontSize: 28,
            fontFamily: 'galano-semibold',
        },
        h4: {
            fontSize: 14,
            fontFamily: 'galano-semibold',
        },
        p: {
            fontSize: 12,
            fontFamily: 'galano-medium',
            marginTop: 0,
            marginBottom: '1rem',
        },
        // 'h1, h2, h3, h4, h5, h6': {
        //   marginTop: 0,
        //   marginBottom: '.5rem',
        // },
        // '.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6': {
        //   marginBottom: '.5rem',
        //   fontWeight: 500,
        //   lineHeight: 1.2,
        // },
        b: {
            fontFamily: 'galano-bold',
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