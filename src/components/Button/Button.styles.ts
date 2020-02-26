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
    cursor: 'auto',
  },
  /** Color variants */
  primary: {
    color: theme.buttonBackgroundColorSecondary,
    backgroundColor: theme.buttonBackgroundColorPrimary,
    '&:hover': {
      backgroundColor: theme.buttonBackgroundColorPrimaryHover,
    },
    '&:active': {
      backgroundColor: theme.buttonBackgroundColorPrimaryActive,
    },
    '&.disabled': {
      backgroundColor: theme.buttonBackgroundColorSecondary,
      color: theme.buttonColorDisabled,
      borderColor: theme.buttonColorDisabled,
      '&:hover': {
        backgroundColor: theme.buttonBackgroundColorSecondary,
      },
      '&:active': {
        backgroundColor: theme.buttonBackgroundColorSecondary,
      },
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
      backgroundColor: theme.buttonBackgroundColorSecondaryActive,
    },
    '&.disabled': {
      backgroundColor: theme.buttonBackgroundColorSecondary,
      color: theme.buttonColorDisabled,
      borderColor: theme.buttonColorDisabled,
      '&:hover': {
        backgroundColor: theme.buttonBackgroundColorSecondary,
      },
      '&:active': {
        backgroundColor: theme.buttonBackgroundColorSecondary,
      },
    },
  },
  tertiary: {
    display: 'block',
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightMedium,
    fontSize: 14,
    border: `0px !important`,
    color: theme.buttonBackgroundColorPrimary,
    padding: 11,
    '&:hover': {
      color: theme.buttonBackgroundColorPrimaryHover,
    },
    '&:active': {
      color: theme.buttonBackgroundColorPrimaryActive,
    },
    '&.disabled': {
      color: theme.buttonColorDisabled,
      '&:hover': {
        textDecoration: 'none',
      },
    },
    '&::after': {
      content: '" »"',
    }
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
