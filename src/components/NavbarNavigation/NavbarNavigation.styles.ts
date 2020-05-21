export default (theme: any) => ({
  container: {
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
    padding: '5px 24px',
    [`@media (max-width: ${theme.gridSmBreakpoint || 576}px)`]: {
      padding: 5,
    },
    cursor: 'pointer',
    userSelect: 'none',
    textAlign: 'center',
    verticalAlign: 'middle',
    transition: '0.2s',
    '&:hover': {
      color: theme.navbarItemColorHover,
    },
    '&:active': {
      color: theme.navbarItemColorActive,
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
      color: theme.navbarItemColorHighlightActive,
    },
    '&.underlined': {
      borderBottom: `3px solid ${theme.navbarItemColorHighlight}`
    },
    '& $icon': {
      fill: theme.navbarItemColorHighlight,
    },
  },
  iconContainer: {
    display: 'inline-block',
    width: 14,
    marginRight: 4,
  },
  icon: {
    verticalAlign: 'middle',
    fill: theme.navbarItemColor,
  }
});
