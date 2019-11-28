export default (theme: any) => ({
  root: {
    position: 'relative',
    overflow: 'visible',
  },
  badge: {
    position: 'absolute',
    borderRadius: 7,
    top: 0,
    right: 0,
    backgroundColor: theme.badgePrimaryBackgroundColor,
    boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.1)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    marginRight: -3,
    marginTop: -3,
    paddingLeft: 5,
    paddingRight: 5,
  },
  badgeContent: {
    fontFamily: theme.fontFamily,
    fontWidth: theme.fontWeightSemiBold,
    fontSize: 9,
    color: theme.textColorHighlight,
    userSelect: 'none',
  },
});
