export default (theme: any) => ({
  root: {
    '&.withBorder': {
      border: theme.tableBorderPrimary,
      borderRadius: 8,
      boxShadow: theme.tableBoxShadow,
    }
  },
  table: {
    borderSpacing: 0,
    fontSize: 14,
    textAlign: 'left',
    width: '100%',
  },
  header: {
    display: 'flex',
    height: 70,
  },
  headerLabel: {
    paddingLeft: 45,
    paddingTop: 25,
    fontSize: 21,
    color: theme.tableHeaderTextColor,
    whiteSpace: 'nowrap',
  },
  headerComponent: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
