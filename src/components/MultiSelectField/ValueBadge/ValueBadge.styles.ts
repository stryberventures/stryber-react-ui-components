export default (theme: any) => ({
  wrapper: {
    borderRadius: 8,
    backgroundColor: theme.inputColorHighlight,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    marginRight: 6,
    height: 28,
  },
  content: {
    color: theme.textColorHighlight,
    flex: 1,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 9,
    whiteSpace: 'nowrap',

    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightRegular,
    fontSize: 12,
  },
  closeSection: {
    pointerEvents: 'auto',
    color: theme.textColorLight,
    height: '100%',
    width: 22,
    backgroundColor: theme.inputColorSpecial,
    borderRadius: '0px 8px 8px 0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: theme.inputColorSpecialHover,
    },
    '&:active': {
      backgroundColor: theme.inputColorSpecialActive,
    },
  },
  closeIcon: {
    width: 12,
    fill: '#fff',
  },
});
