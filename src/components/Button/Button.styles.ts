export default (theme: any) => ({
  root: {
    borderRadius: 8,
    padding: 14,
    border: `solid 1px`,
    width: '100%',
    fontSize: 16,
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightSemiBold,
    userSelect: 'none',
    cursor: 'pointer',
  },
  disabled: {
    color: theme.buttonColorDisabled,
    borderColor: theme.buttonColorDisabled,
  },
  /** Color variants */
  primary: {
    color: theme.buttonBackgroundColorSecondary,
    backgroundColor: theme.buttonBackgroundColorPrimary,
    '&:hover': {
      backgroundColor: theme.buttonBackgroundColorPrimaryHover,
    },
    '&:active': {
      backgroundColor: theme.buttonBackgroundColorPrimaryClick,
    },
  },
  secondary: {
    color: theme.buttonBackgroundColorPrimary,
    border: `solid 1px ${theme.buttonBackgroundColorPrimary}`,
    backgroundColor: theme.buttonBackgroundColorSecondary,
    '&:hover': {
      backgroundColor: theme.buttonBackgroundColorSecondaryHover,
    },
    '&:active': {
      backgroundColor: theme.buttonBackgroundColorSecondaryClick,
    },
  },
  /** Sizes */
  normal: {
  },
  mini: {
    padding: 7,
    fontSize: 10,
    fontWeight: theme.fontWeightMedium,
    borderRadius: 4,
  },
});
