export default (theme: any) => ({
  root: {
    position: 'relative',
  },
  rootOpen: {
    zIndex: 99,
  },
  /** Dropdown arrow */
  dropdownArrow: {

  },
  dropdownArrowOpen: {

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
  selectLabel: {
    cursor: 'pointer',
    userSelect: 'none',

    width: '100%',
    height: '100%',
    border: 0,
    padding: 14,
    backgroundColor: theme.inputBackgroundColor,

    transition: '0.5s',

    color: theme.inputColorIdle || '#54738c',

    fontFamily: theme.fontMedium,
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
  },
  selectLabelWithPlaceholder: {
    paddingBottom: 5,
    paddingTop: 23,
  },
  selectLabelInvalid: {
    '&:focus': {
      color: `${theme.inputColorError || '#d0021b'} !important`,
    },
  },
  /** Dropdown */
  dropdownWrapper: {
    position: 'absolute',
    top: 'calc(100% + 4px)',
    width: '100%',

    paddingTop: 18,
    paddingBottom: 18,

    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    borderRadius: 6,
    border: `solid 1px #cfd8dc`,
    backgroundColor: theme.inputBackgroundColor,
  },
  dropdownItem: {
    paddingLeft: 18,
    paddingRight: 18,
    userSelect: 'none',
    cursor: 'pointer',

    color: theme.textColorSecondary,
    fontFamily: theme.fontRegular,
    fontSize: 14,

    // '&:hover': {
    //   backgroundColor: '#eceff1',
    // },
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
});
