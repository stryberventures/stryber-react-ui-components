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
  },
  input: {
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
    backgroundColor: theme.inputBackgroundColor,

    '&:checked ~ $checkmark': {
      backgroundColor: theme.inputColorHighlight,
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
    height: 19,
    width: 19,
    backgroundColor: theme.inputBackgroundColor,
    borderRadius: 3,
    border: `1px solid ${theme.inputColorBorderIdle}`,

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
