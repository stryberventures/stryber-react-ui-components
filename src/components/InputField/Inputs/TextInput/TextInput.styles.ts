export default (theme: any) => ({
  root: {
    position: 'relative',
    borderRadius: 8,
    overflow: 'hidden',
    border: `solid 1px ${'#cfe2f2'}`,
    transition: '0.5s',
    backgroundColor: '#fff',

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
  disabledRoot: {
    backgroundColor: '#f0f0f0',
  },
  inputWrapper: {
    flex: 1,
    position: 'relative',
  },
  input: {
    width: '100%',
    height: '100%',
    border: 0,
    padding: 14,
    backgroundColor: 'rgba(0,0,0,0)',

    transition: '0.5s',

    color: '#54738c',

    fontFamily: 'galano-medium',
    fontSize: 14,

    '&:focus': {
      color: '#007aff',

      outline: 'none',
    },
  },
  inputWithPlaceholder: {
    paddingBottom: 5,
    paddingTop: 23,
  },
  invalidInput: {
    '&:focus': {
      color: '#d0021b !important',
    },
  },
  placeholder: {
    pointerEvents: 'none',
    position: 'absolute',
    transition: '0.2s',
    fontSize: 14,
    fontFamily: 'galano-medium',

    display: 'block',
    verticalAlign: 'center',

    color: '#95acbf',


    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    padding: 14,
    margin: 0,
    transform: 'translate(0, 0px)',
    transformOrigin: 'left',
  },
  invalidPlaceholder: {
  },
  placeholderCollapsed: {
    fontSize: 10,
    transform: 'translate(0, -12px)',
  },
  prepend: {
    transition: '0.5s',
    position: 'relative',
    backgroundColor: '#007aff',
    minWidth: 7,
    overflow: 'visible',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    zIndex: 1,
  },
  prependMargin: {
    marginRight: 20,
  },
  prependContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    color: '#fff',

    padding: 8,
    paddingLeft: 17,
    height: '100%',
  },
  prependBackground: {
    right: -20,
    zIndex: -1,
    position: 'absolute',
    height: '105%',
  },
  invalidPrepend: {
    backgroundColor: '#d0021b',
  },
  append: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    paddingLeft: 20,
  },
  errorMessage: {
    color: '#ea3546',
    fontFamily: 'galano-light',
    fontSize: 10,
  },
});