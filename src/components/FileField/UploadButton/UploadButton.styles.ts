export default (theme: any) => ({
  uploadButton: {
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

    '&.disabled': {
      borderColor: theme.inputColorBorderIdle,
      color: theme.inputColorBorderIdle,
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
