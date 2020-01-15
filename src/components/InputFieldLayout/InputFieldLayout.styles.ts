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
  fieldWrapper: {
    flex: 1,
    position: 'relative',
  },
  /** Placeholder */
  placeholder: {
    pointerEvents: 'none',
    userSelect: 'none',
    position: 'absolute',
    transition: '0.2s',
    fontSize: 14,
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightMedium,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    color: theme.inputPlaceholderColorIdle || '#95acbf',

    width: '100%',
    height: '100%',
    padding: 14,
    margin: 0,
    transform: 'translate(0, 0px)',
    transformOrigin: 'left',
  },
  placeholderInvalid: {
  },
  placeholderCollapsed: {
    fontSize: 10,
    transform: 'translate(0, -12px)',
  },
  /** Prepend */
  prepend: {
    transition: '0.5s',
    position: 'relative',
    minWidth: 7,
    overflow: 'visible',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    zIndex: 1,

    '& + $input:disabled': {
      fill: theme.inputPlaceholderColorIdle || '#95acbf',
      backgroundColor: theme.inputPlaceholderColorIdle || '#95acbf',
    },
  },
  prependDisabled: {
    fill: `${theme.inputPlaceholderColorIdle || '#95acbf'} !important`,
    backgroundColor: `${theme.inputPlaceholderColorIdle || '#95acbf'} !important`,
  },
  prependMargin: {
    marginRight: 20,
  },
  prependInvalid: {
    fill: `${theme.inputColorError || '#d0021b'} !important`,
    backgroundColor: `${theme.inputColorError || '#d0021b'} !important`,
  },
  prependContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    color: theme.inputBackgroundColor || '#fff',

    padding: 8,
    paddingLeft: 17,
    height: '100%',
  },
  prependBackgroundColor: {
    backgroundColor: theme.inputColorHighlight || '#007aff',
    fill: theme.inputColorHighlight || '#007aff',
  },
  prependBackgroundIcon: {
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
  },
  /** Error message */
  errorMessage: {
    color: theme.inputErrorMessageColor || '#ea3546',
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightLight,
    fontSize: 10,
  },
});
