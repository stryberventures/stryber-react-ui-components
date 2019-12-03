export default (theme: any) => ({
  navbar: {
    position: 'relative',

    minHeight: 56,
    backgroundColor: theme.backgroundColorPrimary,
    width: '100%',
    boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.1)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  section: {
    width: '100%',
    padding: '0px 20px',
  },
  align: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    '&.left': {
      justifyContent: 'flex-start',
    },
    '&.center': {
      justifyContent: 'center',
    },
    '&.right': {
      justifyContent: 'flex-end',
    },
  },
});
