export default (theme: any) => ({
  /** Root Wrapper */
  root: {
    transition: '0.3s',

    position: 'relative',
    cursor: 'pointer',
    userSelect: 'none',

    color: theme.textColorSecondary,
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightMedium,
    fontSize: 14,

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
    backgroundColor: theme.inputBackgroundColor,
    borderRadius: '50%',
    border: `1px solid ${theme.inputColorBorderIdle}`,

    '&:after': {
      content: '""',
      position: 'absolute',
      display: 'none',

      top: 6,
      left: 6,
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'white',
    },
  },
  placeholder: {
    padding: 10,
  },
});
