export default (theme: any) => ({
  root: {
    height: 40,
  },
  bodyRow: {
    '&:nth-child(odd)': {
      backgroundColor: theme.tableBackgroundColor,
    }
  }
});
