export default (theme: any) => ({
  root: {
    color: '#FFF',
    padding: '5px 8px 5px 8px',
    backgroundColor: theme.tagBackgroundColor,
    fontSize: 10,
    marginRight: 4
  },
  closeBlock: {
    display: 'inline-block',
    marginLeft: 12,
    cursor: 'pointer'
  },
  flat: {

  },
  round: {
    borderRadius: 4
  },
  circle: {
    borderRadius: 100
  },
  normal: {
    maxHeight: 24,
  },
  small: {
    padding: '1px 4px 1px 4px',
    marginBottom: 5,
    '& $closeBlock': {
      marginLeft: 6
    },
    maxHeight: 16
  },
  large: {
    padding: '6px 16px 6px 16px',
    fontSize: 12
  }
});
