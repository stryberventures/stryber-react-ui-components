export default (theme: any) => ({
  root: {
    width: '100%',
    border: theme.tableBorderPrimary,
    borderRadius: 8,
    boxShadow: theme.tableBoxShadow,
  },
  header: {
    height: 70,
  },
  headerLabel: {
    paddingLeft: 45,
    paddingTop: 25,
    fontSize: 21,
    color: theme.someTextColor,
  },
  table: {
    width: '100%',
    textAlign: 'left',
    color: theme.someTextColor,
    fontSize: 14,
    borderSpacing: 0,
    '& th': {
      borderBottom: `2px solid ${theme.backgroundColorSecondary}`,
    }
  },
  tableHead: {
    borderBottom: theme.tableBorderPrimary,
  },
  row: {
    height: 50,
    '&:nth-child(even)': {
      backgroundColor: theme.backgroundColorSecondary,
    }
  },
  cell: {
    padding: '0 5px',
    '&:first-child': {
      paddingLeft: 45,
    },
  },
});
