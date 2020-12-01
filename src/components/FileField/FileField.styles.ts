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
    color: theme.inputColorIdle,
    fontFamily: theme.fontFamily,
    fontSize: 14,
    fontWeight: theme.fontWeightMedium,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    cursor: 'pointer',
  },

  selectedFiles: {
    margin: 0,
    padding: '0 21px',
    color: theme.inputPlaceholderColorIdle || '#95acbf',
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightLight,
    fontSize: 10,
  },
  inputLoading: {
    height: 44,
    width: '100%',
    borderRadius: 4
  },
});
