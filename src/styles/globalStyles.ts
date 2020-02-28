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
      fontSize: 42,
      fontFamily: theme.fontFamily,
      fontWeight: theme.fontWeightBold,
    },
    h2: {
      fontSize: 32,
      fontFamily: theme.fontFamily,
      fontWeight: theme.fontWeightBold,
    },
    h3: {
      fontSize: 28,
      fontFamily: theme.fontFamily,
      fontWeight: theme.fontWeightSemiBold,
    },
    h4: {
      fontSize: 14,
      fontFamily: theme.fontFamily,
      fontWeight: theme.fontWeightBold,
    },
    p: {
      fontSize: 12,
      fontFamily: theme.fontFamily,
      fontWeight: theme.fontWeightMedium,
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
  },
});
