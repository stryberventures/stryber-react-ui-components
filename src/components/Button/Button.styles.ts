export default (theme: any) => ({
  root: {
    borderRadius: 8,
    padding: 14,
    border: `solid 1px`,
  },
  content: {
    fontSize: 16,
    fontFamily: 'galano-semibold',
  },
  disabled: {
    backgroundColor: theme.backgroundColorDisabled,
  },
  primary: {
    color: theme.backgroundColorSecondary,
    backgroundColor: theme.backgroundColorPrimary,
    '&:hover': {
      backgroundColor: theme.backgroundColorPrimaryHover,
    },
    '&:active': {
      backgroundColor: theme.backgroundColorPrimaryClick,
    },
  },
  secondary: {
    color: theme.backgroundColorPrimary,
    border: `solid 1px ${theme.backgroundColorPrimary}`,
    backgroundColor: theme.backgroundColorSecondary,
    '&:hover': {
      backgroundColor: theme.backgroundColorSecondaryHover,
    },
    '&:active': {
      backgroundColor: theme.backgroundColorSecondaryClick,
    },
  },
});
