export default (theme: any) => ({
  root: {
    position: 'relative',
  },
  rootOpen: {
    zIndex: 99,
  },
  /** Search icon */
  searchIcon: {
    fill: theme.inputPlaceholderColorIdle || '#95acbf',
  },
  searchIconMicro: {
    width: 15,
  },
  /** Clear icon */
  clearIcon: {
    marginRight: 10,
    width: 18,
    fill: theme.inputColorBorderIdle || '#95acbf',
  },
  /** Selected values Wrapper */
  selectElement: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0)',
    border: 0,
    '-moz-appearance': 'none',
    '-webkit-appearance': 'none',
    '&:focus': {
      outline: 'none',
    },
  },
  inputField: {
    cursor: 'pointer',
    userSelect: 'none',

    width: '100%',
    height: '100%',
    border: 0,
    backgroundColor: theme.inputBackgroundColor,

    transition: '0.5s',

    color: theme.inputColorIdle || '#54738c',

    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightMedium,
    fontSize: 14,

    '&:focus': {
      color: theme.inputColorHighlight || '#007aff',
      outline: 'none',
    },
    // ':before': { content: '\00a0' },
    '&:after': {
      content: '"."',
      visibility: 'hidden',
    },
    '&::placeholder': {
      color: theme.inputPlaceholderColorIdle || '#95acbf',
    }
  },
  inputFieldNormal: {
    padding: 14,
  },
  inputFieldMini: {
    padding: 0,
  },
  inputFieldWithPlaceholder: {
    paddingBottom: 5,
    paddingTop: 23,
  },
  inputFieldInvalid: {
    '&:focus': {
      color: `${theme.inputColorError || '#d0021b'} !important`,
    },
  },
  /** Dropdown */
  dropdownWrapper: {
    position: 'absolute',
    top: 'calc(100% + 4px)',
    width: '100%',

    paddingTop: 10,
    paddingBottom: 10,

    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    borderRadius: 6,
    border: `solid 1px #cfd8dc`,
    backgroundColor: theme.inputBackgroundColor,
  },
  dropdownItem: {
    padding: '8px 18px',
    userSelect: 'none',
    cursor: 'pointer',

    color: theme.textColorSecondary,
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightRegular,
    fontSize: 14,
  },
  dropdownItemHover: {
    backgroundColor: '#eceff1',
  },
  dropdownItemSelected: {
    backgroundColor: theme.inputColorSelected,
  },
  /** Clickaway */
  clickaway: {
    zIndex: 98,
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  /** Error message */
  errorMessage: {
    color: theme.inputErrorMessageColor || '#ea3546',
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightLight,
    fontSize: 10,
  },
});
