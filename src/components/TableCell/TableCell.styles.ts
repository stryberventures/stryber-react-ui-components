export default (theme: any) => ({
  root: {
    padding: '18px 5px',
    '&:first-child': {
      paddingLeft: 22,
    },
    '&:last-child': {
      paddingRight: 22,
    },
    'th&': {
      whiteSpace: 'nowrap',
      fontWeight: 'normal',
    },
  },
});
