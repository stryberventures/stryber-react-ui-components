export default (theme: any) => ({
  root: {
    padding: '0 5px',
    '&:first-child': {
      paddingLeft: 45,
    },
    '&:last-child': {
      paddingRight: 20,
    },
    'th&': {
      whiteSpace: 'nowrap',
      fontWeight: 'normal',
    },
  },
});
