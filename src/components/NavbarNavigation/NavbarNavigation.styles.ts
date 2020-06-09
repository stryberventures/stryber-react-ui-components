export default (theme: any) => ({
  container: {
    backgroundColor: theme.backgroundColorPrimary,
    display: 'flex',
    flexWrap: 'no-wrap',
    alignItems: 'center',
    padding: 0,
    height: '100%',

    flexDirection: 'row',
    [`@media (max-width: ${theme.gridSmBreakpoint || 576}px)`]: {
      flexDirection: 'column',
    },
  },
  item: {
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightMedium,
    color: theme.navbarItemColor,
    fontSize: 14,
    padding: '15px 12px',
    [`@media (max-width: ${theme.gridSmBreakpoint || 576}px)`]: {
      padding: 5,
    },
    cursor: 'pointer',
    userSelect: 'none',
    textAlign: 'center',
    verticalAlign: 'middle',
    transition: '0.2s',
    opacity: .5,
    '&:hover': {
      color: theme.navbarItemColorHover,
      opacity: 1
    },
    '&:active': {
      color: theme.navbarItemColorActive,
      opacity: 1
    },
    margin: 0,
    borderTop: '3px solid rgba(0,0,0,0)',
    borderBottom: '3px solid rgba(0,0,0,0)',
  },
  itemSelected: {
    color: theme.navbarItemColorHighlight,
    opacity: 1,
    '&:hover': {
      color: theme.navbarItemColorHighlightHover,
    },
    '&:active': {
      color: theme.navbarItemColorHighlightActive,
    },
    '&.underlined': {
      borderBottom: `3px solid ${theme.navbarItemColorHighlight}`
    },
  },
});
