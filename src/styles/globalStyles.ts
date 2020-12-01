export default (theme: any) => ({
  '@global': {
    '@import': [
      ...theme.imports,
    ],
    html: {
      height: '100%',
      width: '100%',
    },
    body: {
      fontFamily: theme.fontFamily,
      fontWeight: theme.fontWeightRegular,
      fontSmoothing: 'antialiased',
      height: '100%',
      width: '100%',
      padding: 0,
      margin: 0,
      backgroundColor: theme.backgroundColorPrimary,
      color: theme.textColorPrimary,
    },
    h1: {
      fontSize: 96,
      fontFamily: theme.fontFamily,
      fontWeight: theme.fontWeightLight,
      letterSpacing: -1.5,
    },
    h2: {
      fontSize: 60,
      fontFamily: theme.fontFamily,
      fontWeight: theme.fontWeightLight,
      letterSpacing: -0.5,
    },
    h3: {
      fontSize: 48,
      fontFamily: theme.fontFamily,
      fontWeight: theme.fontWeightRegular,
      letterSpacing: 0,
    },
    h4: {
      fontSize: 34,
      fontFamily: theme.fontFamily,
      fontWeight: theme.fontWeightRegular,
      letterSpacing: 0.25,
    },
    h5: {
      fontSize: 24,
      fontFamily: theme.fontFamily,
      fontWeight: theme.fontWeightRegular,
      letterSpacing: 0,
    },
    h6: {
      fontSize: 20,
      fontFamily: theme.fontFamily,
      fontWeight: theme.fontWeightSemiBold,
      letterSpacing: 0.15,
    },
    p: {
      fontSize: 16,
      fontFamily: theme.fontFamily,
      fontWeight: theme.fontWeightRegular,
      letterSpacing: 0.15,
    },
    b: {
      fontFamily: theme.fontFamily,
      fontWeight: theme.fontWeightBold,
    },
    hr: {
      border: `0.5px solid ${theme.hrColor}`,
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
      color: theme.buttonColorSecondary,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      }
    },
    '.loadingAnimation': {
      position: 'relative',
      overflow: 'hidden',
      background: '#DDDDDD',
      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        left: '-150px',
        top: '0',
        height: '100%',
        width: '150px',
        background: 'linear-gradient(to right, transparent 0%, #efefef 50%, transparent 100%)',
        animation: 'load 0.8s cubic-bezier(0.4, 0.0, 0.2, 1) infinite',
      }
    },
    '@keyframes load': {
      '0%': {
        left: -150
      },
      '100%': {
        left: '100%',
      },
    },
  },
});
