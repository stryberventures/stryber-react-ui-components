export default (theme: any) => ({
  root: {
    borderRadius: 8,
    padding: 14,
    border: `solid 1px`,
    width: '100%',
  },
  content: {
    fontSize: 16,
    fontFamily: 'galano-semibold',
  },
  disabled: {
    backgroundColor: theme.buttonBackgroundColorDisabled,
  },
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
});
