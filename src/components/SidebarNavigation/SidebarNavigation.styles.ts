export default (theme: any) => ({
  /** Container / Wrapper */
  container: {
    padding: '24px 0px',
    backgroundColor: theme.backgroundColorPrimary,
    height: '100%',

    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 2px 13px 0 rgba(0, 0, 0, 0.07)',
  },
  /** Section */
  section: {
    cursor: 'pointer',
    userSelect: 'none',
    transition: '0.2s',
  },
  sectionSelected: {
    backgroundColor: '#fff',
    '& $sectionHeader': {
      backgroundColor: theme.sidebarItemBackgroundSelected,
      borderLeft: `4px solid ${theme.sidebarItemColorHighlight}`,
      '&:hover': {
        color: '#000',
      },
    },
  },
  sectionHeader: {
    display: 'flex',
    flexDirection: 'row',
    padding: '14.5px 24px',
    borderRight: '4px solid rgba(0,0,0,0)',
    borderLeft: '4px solid rgba(0,0,0,0)',
    '&:hover': {
      color: theme.sidebarItemColorHover,
      '& $sectionIcon': {
        fill: theme.sidebarItemColorHover
      }
    },
    '&:active': {
      color: theme.sidebarItemColorActive,
      '& $sectionIcon': {
        fill: theme.sidebarItemColorActive
      }
    },
  },
  sectionInfoContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  sectionTitle: {
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightMedium,
    fontSize: 16,
  },
  expandIconContainer: {
    paddingTop: 5,
  },
  expandIcon: {
    transition: '0.3s',
    width: 20,
    fill: theme.sidebarItemColor,
    transform: 'rotate(0deg)',
  },
  expandIconCollapsed: {
    transform: 'rotate(-90deg)',
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
    cursor: 'pointer',
    transition: '0.3s',
    color: '#969695',
    fontSize: 14,
    padding: '12px 24px',
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightRegular,
    '&:hover': {
      color: theme.sidebarItemColorHover,
    },
    '&:active': {
      color: theme.sidebarItemColorActive,
    },
    borderLeft: `4px solid ${theme.sidebarItemColorHighlight}`
  },
  itemSelected: {
    fontWeight: theme.fontWeightMedium,
    color: theme.sidebarItemColorSelected,
    backgroundColor: theme.sidebarItemBackgroundSelected,
    '&:hover': {
      color: theme.sidebarItemColorSelected,
    },
    '&:active': {
      color: theme.sidebarItemColorSelected,
    },
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 24px'
  },
  avatar: {
    width: 44,
    height: 44,
    backgroundColor: '#ccc',
    borderRadius: 22,
    marginRight: 10
  },
  titleSection: {},
  title: {
    margin: 0,
    fontSize: 16,
  },
  description: {
    margin: 0,
    fontSize: 12,
    color: '#1d1d1b',
    opacity: 0.5,
  },
  sectionIcon: ({ iconSize }: any) => ({
      fill: '#233340',
      width: iconSize === 'mini' ? 24 : 32,
      height: iconSize === 'mini' ? 24 : 32,
      marginRight: 8,
    })
});
