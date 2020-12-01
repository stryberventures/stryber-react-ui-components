export default (theme: any) => ({
  root: {
    color: '#FFF',
    padding: '5px 8px 5px 8px',
    backgroundColor: theme.tagBackgroundColor,
    fontSize: 10,
    marginRight: 4
  },
  rootDisabled: {
    pointerEvents: 'none',
    backgroundColor: '#ccc',
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
    '& $closeBlock': {
      marginLeft: 6
    },
    maxHeight: 16
  },
  large: {
    padding: '6px 16px 6px 16px',
    fontSize: 12
  },
  tagLoading: {
    height: 24,
    width: 80,
    borderRadius: 100
  },
  tagSmallLoading: {
    height: 16,
    width: 60,
  },
  tagLargeLoading: {
    height: 30,
    width: 100
  }
});
