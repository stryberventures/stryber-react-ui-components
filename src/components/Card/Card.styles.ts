export default (theme: any) => ({
  root: {
    borderRadius: 8,
    display: 'flex',
    flexFlow: 'column',
    boxShadow: '0 2px 13px 0 rgba(0, 0, 0, 0.07)',
    overflow: 'hidden',
  },
  title: {
    padding: 24,
    flex: 1,

    fontWeight: theme.fontWeightSemiBold,
    fontFamily: theme.fontFamily,
    fontSize: 18,
  },
  body: {
    padding: 24,
    flex: 1,

    fontWeight: theme.fontWeightLight,
    fontFamily: theme.fontFamily,
    fontSize: 14,
  },
});
