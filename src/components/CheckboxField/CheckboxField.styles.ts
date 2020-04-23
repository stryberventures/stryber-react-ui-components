export default (theme: any) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
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

    /** Checkmark */
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
    /** Switch */
    '&:hover $input ~ $switch': {
      backgroundColor: theme.inputColorBorderIdleHover,
    },
    '&:active $input ~ $switch': {
      backgroundColor: theme.inputColorBorderIdleActive,
    },
    '&:hover $input:checked ~ $switch': {
      backgroundColor: theme.inputColorHighlightHover,
    },
    '&:active $input:checked ~ $switch': {
      backgroundColor: theme.inputColorHighlightActive,
    },
  },
  /** Input */
  input: {
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
    backgroundColor: theme.inputBackgroundColor,

    /** Placeholder */
    '&:checked ~ $placeholder': {
      color: theme.inputColorHighlight,
    },
    '&:disabled ~ $placeholder': {
      color: theme.inputPlaceholderColorIdle,
    },
    /** Checkmark */
    '&:checked ~ $checkmark': {
      backgroundColor: theme.inputColorHighlight,
    },
    '&:checked ~ $checkmark:after': {
      display: 'block',
    },
    '&:disabled ~ $checkmark': {
      backgroundColor: `${theme.inputColorBorderIdle} !important`,
    },
    /** Switch */
    '&:checked ~ $switch': {
      backgroundColor: theme.inputColorHighlight,
    },
    '&:checked ~ $switch:after': {
      left: 19,
    },
    '&:disabled ~ $switch': {
      backgroundColor: `${theme.inputColorBorderIdle} !important`,
    },
  },
  /** Checkmark box */
  checkmark: {
    position: 'relative',
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    minWidth: 16,
    backgroundColor: theme.inputBackgroundColor,
    borderRadius: 3,
    border: `1px solid ${theme.inputColorBorderIdle}`,

    /** Checkmark */
    '&:after': {
      content: '""',
      position: 'absolute',
      display: 'none',

      left: 7.5,
      top: 2,
      width: 6,
      height: 14,
      border: 'solid white',
      borderWidth: '0 2px 2px 0',
      transform: 'rotate(45deg)',
    },
  },

  /** Switch container */
  switch: {
    overflow: 'hidden',
    position: 'relative',
    top: 0,
    left: 0,
    height: 24,
    width: 44,
    backgroundColor: theme.inputColorBorderIdle,
    borderRadius: 12,
    border: `1px solid ${theme.inputColorBorderIdle}`,

    /** Switch */
    '&:after': {
      transition: '0.3s',

      content: '""',
      position: 'absolute',
      display: 'block',

      top: 1,
      left: 2,
      width: 20,
      height: 20,
      borderRadius: '50%',
      backgroundColor: theme.inputBackgroundColor,
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.32)',
    },
  },

  /** Placeholder */
  placeholder: {
    padding: '8px 4px',
  },
  placeholderInvalid: {
    color: theme.inputColorError,
  },
  /** Error message */
  errorMessage: {
    color: theme.inputErrorMessageColor || '#ea3546',
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightLight,
    fontSize: 10,
  },
  /** Handle size */
  small: {
    fontSize: 14,
    '& $checkmark': {
      height: 16,
      width: 16,
      '&:after': {
        left: 4.4,
        top: 2,
        width: 5,
        height: 8,
      },
    },
    '& $switch': {
      height: 16,
      width: 26,
      borderRadius: 8,
      '&:after': {
        top: 1,
        left: 2,
        width: 12,
        height: 12,
      }
    },
    '& $input': {
      '&:checked ~ $switch:after': {
        left: 10,
      }
    }
  },
  normal: {
    fontSize: 14,
  },
  large: {
    fontSize: 16,
    '& $checkmark': {
      height: 30,
      width: 30,
      '&:after': {
        left: 9,
        top: 4,
        width: 8,
        height: 16,
      },
    },
    '& $switch': {
      height: 32,
      width: 60,
      borderRadius: 16,
      '&:after': {
        top: 2,
        left: 2,
        width: 26,
        height: 26,
      }
    },
    '& $input': {
      '&:checked ~ $switch:after': {
        left: 29,
      }
    }
  }
});
