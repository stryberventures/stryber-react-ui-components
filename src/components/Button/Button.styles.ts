export default (theme: any) => ({
  root: {
    border: `solid 1px`,
    width: '100%',
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightSemiBold,
    fontSize: theme.buttonsFontSize,
    letterSpacing: theme.buttonsLetterSpacing,
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
      filter: theme.buttonBackgroundColorPrimaryHover,
    },
    '&:active': {
      backgroundColor: theme.buttonBackgroundColorPrimaryActive,
    },
    '&.disabled': {
      backgroundColor: theme.buttonBackgroundColorPrimaryDisabled,
      color: 'rgba(255, 255, 255, 0.5)',
      borderColor: theme.buttonBackgroundColorPrimaryDisabled,
      '&:hover': {
        backgroundColor: theme.buttonBackgroundColorPrimaryDisabled,
        filter: 'brightness(100%)',
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
      backgroundColor: theme.buttonBackgroundColorPrimary,
      color: theme.buttonBackgroundColorSecondary
    },
    '&:active': {
      backgroundColor: theme.buttonBackgroundColorSecondaryActive,
    },
    '&.disabled': {
      backgroundColor: theme.buttonBackgroundColorSecondaryDisabled,
      color: 'rgba(204, 204, 204, 0.5)',
      borderColor: theme.buttonBackgroundColorPrimaryDisabled,
      '&:hover': {
        backgroundColor: theme.buttonBackgroundColorSecondaryDisabled,
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
    padding: '20px 32px',
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
  },
  /** Sizes */
  large: {
    padding: '27px 44px',
  },
  normal: {
    padding: '20px 32px',
  },
  small: {
    padding: '15px 24px',
    fontWeight: theme.fontWeightRegular,
    fontSize: theme.subtitleFontSize,
    letterSpacing: theme.subtitleLetterSpacing,
  },
  mini: {
    padding: '4px 12px',
    fontSize: 10,
    fontWeight: theme.fontWeightRegular,
    borderRadius: 4,
    maxHeight: 24
  },
  round: {
    borderRadius: 4,
  },
  flat: {
    borderRadius: 0,
  },
  circle: {
    borderRadius: 50,
  }
});
