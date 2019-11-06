export default (theme: any) => ({
  wrapper: {
    borderRadius: 8,
    backgroundColor: theme.backgroundColorHighlight,
    display: 'flex',
    height: 30,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    margin: '2px 6px',
  },
  content: {
    color: theme.textColorLight,
    flex: 1,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px 10px',
    whiteSpace: 'nowrap',
  },
  closeSection: {
    color: theme.textColorLight,
    height: '100%',
    width: 22,
    backgroundColor: '#1936d2',
    borderRadius: '0px 8px 8px 0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: theme.buttonColorPrimaryHover,
    },
  },
  closeIcon: {
  },
});
