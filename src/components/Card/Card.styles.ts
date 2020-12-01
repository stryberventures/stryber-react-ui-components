export default (theme: any) => ({
  root: {
    borderRadius: 8,
    display: 'flex',
    flexFlow: 'column',
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
  normal: {
    boxShadow: '0 4px 8px 0 rgba(56, 96, 165, 0.15)',
  },
  bold: {
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)',
  },
  cardLoading: {
    width: '100%',
    height: 140,
    borderRadius: 8
  }
});
