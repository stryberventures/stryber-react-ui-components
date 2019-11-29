export default (theme: any) => ({
  root: {
    userSelect: 'none',
    display: 'flex',
  },
  item: {
    width: 29,
    height: 29,
    backgroundColor: theme.backgroundColorSecondary,
    fontSize: 12,
    color: theme.textColorSecondary,
    borderRadius: 4,
    margin: 4,
    textAlign: 'center',
    lineHeight: '29px',
    cursor: 'pointer',
  },
  active: {
    backgroundColor: theme.buttonColorSecondary,
    color: theme.backgroundColorPrimary,
  },
  disabled: {
    cursor: 'default',
    pointerEvents: 'none',
    '&:before': {
      opacity: 0.5,
    }
  },
  arrow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:before': {
      content: '""',
      display: 'block',
      width: 8,
      height: 8,
      borderLeft: `2px solid ${theme.textColorSecondary}`,
      borderBottom: `2px solid ${theme.textColorSecondary}`,
      borderRadius: 2,
    }
  },
  leftArrow: {
    '&:before': {
      transform: 'rotate(45deg)',
    }
  },
  rightArrow: {
    '&:before': {
      transform: 'rotate(225deg)',
    }
  }
});
