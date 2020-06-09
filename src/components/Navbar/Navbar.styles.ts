export default (theme: any) => ({
  navbar: {
    position: 'relative',
    minHeight: 60,
    backgroundColor: theme.backgroundColorPrimary,
    width: '100%',
    padding: '0 16px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  section: {
  },
  align: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,

    [`@media (max-width: ${theme.gridSmBreakpoint || 576}px)`]: {
      minWidth: '100%',
    },
    /** Different align logic */
    '&.left': {
      justifyContent: 'flex-start',
      [`@media (max-width: ${theme.gridSmBreakpoint || 576}px)`]: {
        justifyContent: 'center',
      },
    },
    '&.center': {
      justifyContent: 'center',
    },
    '&.right': {
      justifyContent: 'flex-end',
      [`@media (max-width: ${theme.gridSmBreakpoint || 576}px)`]: {
        justifyContent: 'center',
      },
    },
  },
});
