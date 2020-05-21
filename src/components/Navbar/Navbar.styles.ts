export default (theme: any) => ({
  navbar: {
    position: 'relative',

    minHeight: 32,
    width: '100%',
    boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.1)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '0 16px'
  },
  section: {
    padding: '0px 20px',
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
