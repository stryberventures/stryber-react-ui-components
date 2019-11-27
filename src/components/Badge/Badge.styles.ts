export default (theme: any) => ({
  root: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    borderRadius: '50%',
    width: 14,
    height: 14,
    top: 0,
    right: 0,
    backgroundColor: theme.badgePrimaryBackgroundColor,
    boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.1)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeContent: {
    fontFamily: theme.fontFamily,
    fontWidth: theme.fontWeightSemiBold,
    fontSize: 9,
    color: theme.textColorHighlight,
    userSelect: 'none',
  },
});
