export default (theme: any) => ({
  container: {
    backgroundColor: theme.backgroundColorPrimary,
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    height: '100%',
  },
  item: {
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightMedium,
    color: theme.navbarItemColor,
    fontSize: 14,
    padding: 15,
    cursor: 'pointer',
    userSelect: 'none',
    textAlign: 'center',
    verticalAlign: 'middle',
    transition: '0.2s',
    '&:hover': {
      color: theme.navbarItemColorHover,
    },
    '&:active': {
      color: theme.navbarItemColorClick,
    },
    margin: 0,
    borderTop: '3px solid rgba(0,0,0,0)',
    borderBottom: '3px solid rgba(0,0,0,0)',
  },
  itemSelected: {
    color: theme.navbarItemColorHighlight,
    '&:hover': {
      color: theme.navbarItemColorHighlightHover,
    },
    '&:active': {
      color: theme.navbarItemColorHighlightClick,
    },
    '&.underlined': {
      borderBottom: `3px solid ${theme.navbarItemColorHighlight}`
    },
  },
});
