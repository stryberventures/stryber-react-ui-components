export default (theme: any) => ({
  /** Container / Wrapper */
  container: {
    padding: '10px 0px',
    backgroundColor: theme.backgroundColorPrimary,
    height: '100%',

    display: 'flex',
    flexDirection: 'column',
  },
  /** Section */
  section: {
    userSelect: 'none',
    borderRight: '3px solid rgba(0,0,0,0)',
    borderLeft: '3px solid rgba(0,0,0,0)',
    margin: '5px 0px',
    padding: '2px 21px',
    transition: '0.2s',
    '&:hover': {
      color: theme.sidebarItemColorHover,
    },
    '&:active': {
      color: theme.sidebarItemColorClick,
    },
  },
  sectionSelected: {
    color: theme.sidebarItemColorHighlight,
    borderLeft: `3px solid ${theme.sidebarItemColorHighlight}`,
    '&:hover': {
      color: theme.sidebarItemColorHighlightHover,
    },
    '&:active': {
      color: theme.sidebarItemColorHighlightClick,
    },
  },
  sectionHeader: {
    display: 'flex',
    flexDirection: 'row',
  },
  sectionInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  sectionTitle: {
    marginTop: 5,
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightMedium,
    fontSize: 14,
    color: theme.sidebarSectionColor,
  },
  sectionDescription: {
    marginTop: 7,
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightLight,
    fontSize: 12,
    color: theme.sidebarSectionColor,
  },
  expandIconContainer: {

  },
  expandIcon: {
    transition: '0.3s',
    width: 20,
    fill: theme.sidebarItemColor,
  },
  expandIconCollapsed: {
    transform: 'rotate(180deg)',
  },
  sectionChildren: {
    padding: 0,
    maxHeight: 9999,
    transition: 'all 0.5s ease-in-out',
  },
  sectionChildrenHidden: {
    opacity: 0,
    maxHeight: '0px !important',
    padding: 0,
  },
  /** Item */
  item: {
    transition: '0.3s',
    color: theme.sidebarItemColor,
    fontSize: 12,
    padding: '4px 0px',
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightRegular,
    '&:hover': {
      color: theme.sidebarItemColorHover,
    },
    '&:active': {
      color: theme.sidebarItemColorClick,
    },
  },
  itemSelected: {
    fontWeight: theme.fontWeightMedium,
    color: theme.sidebarItemColorSelected,
    '&:hover': {
      color: theme.sidebarItemColorSelected,
    },
    '&:active': {
      color: theme.sidebarItemColorSelected,
    },
  },
});
