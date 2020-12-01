export default (theme: any) => ({
  root: {
    userSelect: 'none',
    display: 'flex',
  },
  item: {
    width: 29,
    height: 29,
    backgroundColor: theme.paginationBackgroundColor,
    fontSize: 12,
    color: theme.paginationTextColor,
    borderRadius: 4,
    margin: 4,
    textAlign: 'center',
    lineHeight: '29px',
    cursor: 'pointer',
  },
  active: {
    backgroundColor: theme.paginationBackgroundColorActive,
    color: theme.paginationTextColorActive,
  },
  disabled: {
    cursor: 'default',
    pointerEvents: 'none',
    '&:before': {
      opacity: 0.5,
    }
  },
  widthAuto: {
    width: 'auto',
    padding: '0 4px',
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
      borderLeft: `2px solid ${theme.paginationTextColor}`,
      borderBottom: `2px solid ${theme.paginationTextColor}`,
      borderRadius: 2,
    }
  },
  leftArrow: {
    '&:before': {
      transform: 'rotate(45deg)',
      marginLeft: 2,
    }
  },
  rightArrow: {
    '&:before': {
      transform: 'rotate(225deg)',
      marginRight: 2,
    }
  },
  paginationLoading: {
    width: 29,
    height: 29,
    margin: 4,
    borderRadius: 4
  },
  loadingContainer: {
    display: 'flex'
  }
});
