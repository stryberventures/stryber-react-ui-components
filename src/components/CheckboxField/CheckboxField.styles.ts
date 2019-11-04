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

    color: theme.textColorSecondary,
    fontFamily: theme.fontMedium,
    fontSize: 14,

    display: 'flex',
    alignItems: 'center',

    /** Checkmark */
    '&:hover $input ~ $checkmark': {
      backgroundColor: theme.inputBackgroundColorHover,
    },
    '&:active $input ~ $checkmark': {
      backgroundColor: theme.inputBackgroundColorClick,
    },
    '&:hover $input:checked ~ $checkmark': {
      backgroundColor: theme.inputColorHighlightHover,
    },
    '&:active $input:checked ~ $checkmark': {
      backgroundColor: theme.inputColorHighlightClick,
    },
    /** Switch */
    '&:hover $input ~ $switch': {
      backgroundColor: theme.inputColorBorderIdleHover,
    },
    '&:active $input ~ $switch': {
      backgroundColor: theme.inputColorBorderIdleClick,
    },
    '&:hover $input:checked ~ $switch': {
      backgroundColor: theme.inputColorHighlightHover,
    },
    '&:active $input:checked ~ $switch': {
      backgroundColor: theme.inputColorHighlightClick,
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
      left: 15,
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
    height: 19,
    width: 19,
    backgroundColor: theme.inputBackgroundColor,
    borderRadius: 3,
    border: `1px solid ${theme.inputColorBorderIdle}`,

    /** Checkmark */
    '&:after': {
      content: '""',
      position: 'absolute',
      display: 'none',

      left: 5.5,
      top: 1,
      width: 6,
      height: 12,
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
    height: 22,
    width: 36,
    backgroundColor: theme.inputColorBorderIdle,
    borderRadius: 11,
    border: `1px solid ${theme.inputColorBorderIdle}`,

    /** Switch */
    '&:after': {
      transition: '0.3s',

      content: '""',
      position: 'absolute',
      display: 'block',

      top: 2,
      left: 2,
      width: 16,
      height: 16,
      borderRadius: '50%',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.32)',
    },
  },

  /** Placeholder */
  placeholder: {
    padding: 10,
  },
  /** Error message */
  errorMessage: {
    color: theme.inputErrorMessageColor || '#ea3546',
    fontFamily: theme.fontLight,
    fontSize: 10,
  },
});
