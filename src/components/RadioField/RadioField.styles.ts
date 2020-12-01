export default (theme: any) => ({
  /** Root Wrapper */
  root: {
    transition: '0.3s',

    position: 'relative',
    cursor: 'pointer',
    userSelect: 'none',

    color: theme.textColorPrimary,
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightRegular,

    display: 'flex',
    alignItems: 'center',

    '&:hover $input ~ $checkmark': {
      backgroundColor: theme.inputBackgroundColorHover,
    },
    '&:active $input ~ $checkmark': {
      backgroundColor: theme.inputBackgroundColorActive,
    },
    '&:hover $input:checked ~ $checkmark': {
      backgroundColor: theme.inputColorHighlightHover,
    },
    '&:active $input:checked ~ $checkmark': {
      backgroundColor: theme.inputColorHighlightActive,
    },
  },
  input: {
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
    backgroundColor: theme.inputBackgroundColor,

    '&:checked ~ $checkmark': {
      backgroundColor: theme.inputColorHighlight,
      borderWidth: 0,
    },
    '&:checked ~ $checkmark:after': {
      display: 'block',
    },
    '&:checked ~ $placeholder': {
      color: theme.inputColorHighlight,
    },
    '&:disabled ~ $placeholder': {
      color: theme.inputPlaceholderColorIdle,
    },
    '&:disabled ~ $checkmark': {
      backgroundColor: `${theme.inputColorBorderIdle} !important`,
    },
  },
  checkmark: {
    position: 'relative',
    top: 0,
    left: 0,
    height: 22,
    width: 22,
    minWidth: 22,
    backgroundColor: theme.inputBackgroundColor,
    borderRadius: '50%',
    border: `1px solid ${theme.inputColorBorderIdle}`,

    '&:after': {
      content: '""',
      position: 'absolute',
      display: 'none',

      top: 7,
      left: 7,
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'white',
    },
  },
  placeholder: {
    padding: '8px 4px',
  },
  /* Handle sizes */
  small: {
    fontSize: 14,
    '& $checkmark': {
      height: 16,
      width: 16,
      minWidth: 16,
      '&:after': {
        top: 5,
        left: 5,
        width: 6,
        height: 6,
      },
    },
  },
  normal: {
    fontSize: 14,
  },
  large: {
    fontSize: 16,
    '& $checkmark': {
      height: 28,
      width: 28,
      '&:after': {
        top: 9,
        left: 9,
        width: 10,
        height: 10,
      },
    },
  },
  /** Handle error message */
  errorMessage: {
    color: theme.inputErrorMessageColor || '#ea3546',
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightLight,
    fontSize: 10,
  },
  error: {
    '& $root': {
      '&:hover $input:checked ~ $checkmark': {
        backgroundColor: theme.inputErrorMessageColor || '#ea3546',
      },
      '&:active $input:checked ~ $checkmark': {
        backgroundColor: theme.inputErrorMessageColor || '#ea3546',
      },
    },
    '& $input': {
      '&:checked ~ $checkmark': {
        backgroundColor: theme.inputErrorMessageColor || '#ea3546',
      },
      '&:checked ~ $placeholder': {
        color: theme.inputErrorMessageColor || '#ea3546',
      },
    },
    '& $checkmark': {
      border: `1px solid ${theme.inputErrorMessageColor || '#ea3546'}`,
    },
    '& $placeholder': {
      color: theme.inputErrorMessageColor || '#ea3546',
    }
  },
  /** Handle loading */
  loadingContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  labelLoading: {
    height: 19,
    margin: [8, 4],
    width: 120,
    borderRadius: 5
  },
  labelLargeLoading: {
    height: 22
  },
  radioLoading: {
    height: 22,
    width: 22,
    borderRadius: '50%'
  },
  radioSmallLoading: {
    width: 16,
    height: 16
  },
  radioLargeLoading: {
    width: 28,
    height: 28
  }
});
