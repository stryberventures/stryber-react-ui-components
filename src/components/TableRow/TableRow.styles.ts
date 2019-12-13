export default (theme: any) => ({
  root: {
    height: 40,
    '&:nth-child(even)': {
      backgroundColor: theme.tableBackgroundColor,
    }
  },
});
