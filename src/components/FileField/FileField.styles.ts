export default (theme: any) => ({
  input: {
    display: 'none',
  },

  inputFieldWrapper: {
    width: '100%',
    padding: '23px 0',
    cursor: 'pointer',

    '&:focus': {
      outline: 'none',
    },
  },

  inputWithPlaceholder: {
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: '0 14px',
    border: '0',
    backgroundColor: 'rgba(0,0,0,0)',
    transition: '0.5s',
    color: '#54738c',
    fontFamily: 'Work Sans',
    fontSize: '14px',
    fontWeight: '500',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    cursor: 'pointer',
  },

  append: {
    marginRight: 12,
    padding: '0 24px',
    borderRadius: 4.4,
    fontSize: 10,
    fontWeight: 500,
    lineHeight: '23px',
    cursor: 'pointer',

    '&.fileNotSelected': {
      color: '#007aff',
      border: 'solid 1px #007aff',
      backgroundColor: '#fff',

      '&.error': {
        borderColor: theme.inputColorError || '#d0021b',
        color: theme.inputColorError || '#d0021b',
      },
    },

    '&.fileSelected': {
      color: '#fff',
      border: 'solid 1px #007aff',
      backgroundColor: '#007aff',

      '&.error': {
        borderColor: theme.inputColorError || '#d0021b',
        backgroundColor: theme.inputColorError || '#d0021b',
      },
    },
  },
});
