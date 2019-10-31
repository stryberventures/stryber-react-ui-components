export default (theme: any) => ({
  /** Root Wrapper */
  root: {
    position: 'relative',
    borderRadius: 8,
    overflow: 'hidden',
    border: `solid 1px ${theme.inputColorBorderIdle || '#cfe2f2'}`,
    transition: '0.5s',
    backgroundColor: theme.backgroundColorSecondary || '#fff',

    display: 'flex',
    justifyContent: 'space-between',

    '&:focus-within': {
      border: `solid 1px ${theme.inputColorHighlight || '#007aff'}`,
      outline: 'none',
    },
  },
  invalidRoot: {
    border: `solid 1px ${theme.inputColorError || '#d0021b'} !important`,
  },
  rootDisabled: {
    backgroundColor: '#f0f0f0',
  },
  /** Input Wrapper */
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

    color: theme.inputColorIdle || '#54738c',

    fontFamily: 'galano-medium',
    fontSize: 14,

    '&:focus': {
      color: theme.inputColorHighlight || '#007aff',
      outline: 'none',
    },
  },
  inputWithPlaceholder: {
    paddingBottom: 5,
    paddingTop: 23,
  },
  inputInvalid: {
    '&:focus': {
      color: `${theme.inputColorError || '#d0021b'} !important`,
    },
  },
  /** Placeholder */
  placeholder: {
    pointerEvents: 'none',
    position: 'absolute',
    transition: '0.2s',
    fontSize: 14,
    fontFamily: 'galano-medium',

    color: theme.inputPlaceholderColorIdle || '#95acbf',

    width: '100%',
    height: '100%',
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
  /** Prepend */
  prepend: {
    transition: '0.5s',
    position: 'relative',
    backgroundColor: theme.inputColorHighlight || '#007aff',
    fill: theme.inputColorHighlight || '#007aff',
    minWidth: 7,
    overflow: 'visible',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    zIndex: 1,
  },
  prependDisabled: {
    fill: theme.inputPlaceholderColorIdle || '#95acbf',
    backgroundColor: theme.inputPlaceholderColorIdle || '#95acbf',
  },
  prependMargin: {
    marginRight: 20,
  },
  prependInvalid: {
    fill: theme.inputColorError || '#d0021b',
    backgroundColor: theme.inputColorError || '#d0021b',
  },
  prependContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    color: theme.backgroundColorSecondary || '#fff',

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
  /** Append */
  append: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    paddingLeft: 20,
  },
  /** Error message */
  errorMessage: {
    color: theme.inputErrorMessageColor || '#ea3546',
    fontFamily: 'galano-light',
    fontSize: 10,
  },
});
