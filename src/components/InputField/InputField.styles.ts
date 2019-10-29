export default (theme: any) => ({
  root: {
    position: 'relative',
    borderRadius: 8,
    overflow: 'hidden',
    border: `solid 1px ${'#cfe2f2'}`,
    transition: '0.5s',

    display: 'flex',
    justifyContent: 'space-between',

    '&:focus-within': {
      border: `solid 1px ${'#007aff'}`,
      outline: 'none',
    },
  },
  invalidRoot: {
    border: `solid 1px ${'#d0021b'} !important`,
  },
  input: {
    flex: 1,

    width: '100%',
    height: '100%',
    border: 0,
    padding: 14,

    fontFamily: 'galano-medium',
    fontSize: 14,

    '&:focus': {
      outline: 'none',
    },
  },
  prepend: {
    transition: '0.5s',
    position: 'relative',
    backgroundColor: '#007aff',
    minWidth: 7,

    // '&::before': {
    //   zIndex: -1,
    //   position: 'absolute',
    //   width: 50,
    //   height: '100%',
    //   content: '""',
    //   transform: 'rotate(45deg)',
    //   backgroundColor: '#007aff',
    //   borderRadius: 8,
    // },
  },
  invalidPrepend: {
    backgroundColor: '#d0021b',
  },
  append: {

  },
  errorMessage: {
    color: '#ea3546',
    fontFamily: 'galano-light',
    fontSize: 10,
  },
});
