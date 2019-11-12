export default (theme: any) => ({
  fileInput: {
    display: 'block',
    // position: 'absolute',
    width: '100%',
    height: '100%',
    padding: 14,
    opacity: '0',
    cursor: 'pointer'
  },

  inputFieldWrapper: {
    cursor: 'pointer'
  },

  inputLabel: {
    marginRight: 12,
    padding: '0 24px',
    border: 'solid 1px #007aff',
    borderRadius: 4.4,
    color: '#007aff',
    fontSize: 10,
    fontWeight: 500,
    lineHeight: '23px',
    cursor: 'pointer'
},

  placeholder: {
    paddingBottom: 5,
    paddingTop: 23,
    cursor: 'pointer'
  },

  inputLabelInvalid: {

  },

  prependContent: {

  },

  append: {
    paddingLeft: 0,
  },

  fileInputLabel: {
    borderRadius: 8,
    overflow: 'hidden',
    border: `solid 1px ${theme.inputColorBorderIdle || '#cfe2f2'}`,
    transition: '0.5s',
    backgroundColor: theme.inputBackgroundColor || '#fff',

    display: 'flex',
    justifyContent: 'space-between',

    '&:focus-within': {
      border: `solid 1px ${theme.inputColorHighlight || '#007aff'}`,
      outline: 'none',
    },

    cursor: 'pointer',

  },
});
