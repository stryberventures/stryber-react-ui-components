export default (theme: any) => ({
  /** Root Wrapper */
  root: {
    position: 'relative',
    maxHeight: theme.inputMaxHeightIdle,
    borderRadius: 4,
    overflow: 'hidden',
    border: `solid 1px ${theme.inputColorBorderIdle || '#cfe2f2'}`,
    transition: 'color 0.5s, border 0.5s',
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
    backgroundColor: '#f9f9f9',
    borderColor: '#cccccc',
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
    transition: 'transform 0.2s, font 0.2s, color 0.2s',
    fontSize: 14,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
    height: '100%',
    margin: 0,
    transform: 'translate(0, 0px)',
    transformOrigin: 'left',
    color: theme.inputPlaceholderColorIdle || '#95acbf'
  },
  placeholderFontFamily: {
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightRegular,
  },
  placeholderNormal: {
    padding: 12,
    paddingLeft: 16,
  },
  placeholderMini: {
    lineHeight: '26px',
  },
  placeholderInvalid: {
  },
  placeholderCollapsed: {
    fontSize: 10,
    transform: 'translate(0, -10px)',
    fontWeight: theme.fontWeightMedium,
  },
  /** Prepend */
  prepend: {
    transition: 'color 0.5s, border 0.5s',
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
  prependContentSmall: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: 5,
    color: theme.inputBackgroundColor || '#fff',
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
  large: {
    '& $root': {
      maxHeight: theme.inputLargeMaxHeightIdle,
    },
    '& $placeholderNormal': {
      padding: 16
    }
  }
});
