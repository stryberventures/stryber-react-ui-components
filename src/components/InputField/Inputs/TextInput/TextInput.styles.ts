export default (theme: any) => ({
  /** Root Wrapper */
  root: {
    position: 'relative',
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
  },
  rootInvalid: {
    border: `solid 1px ${theme.inputColorError || '#d0021b'} !important`,
  },
  rootDisabled: {
    backgroundColor: '#f0f0f0',
  },
  /** Input Wrapper */
  input: {
    width: '100%',
    height: '100%',
    border: 0,
    padding: 18,
    paddingLeft: 16,
    backgroundColor: 'rgba(0,0,0,0)',

    transition: 'color 0.5s',

    color: theme.inputColorIdle || '#54738c',

    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightRegular,
    fontSize: 14,

    '&:focus': {
      color: theme.inputValueColor || '#007aff',
      outline: 'none',
    },
    '&::placeholder': {
      color: theme.inputPlaceholderColor,
      fontSize: 14
    },
    '&:disabled': {
      color: '#cccccc',

    }
  },
  inputWithPlaceholder: {

  },
  inputWithPlaceholderCollapsed: {
    transform:'translate(0px, 5px)'
  },
  inputInvalid: {
    '&:focus': {
      color: `${theme.inputColorError || '#d0021b'} !important`,
    },
  },
});
