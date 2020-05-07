export default (theme: any) => ({
  root: {
    position: 'relative',
  },
  rootOpen: {
    zIndex: 99,
  },
  /** Dropdown arrow */
  dropdownArrow: {
    transition: '0.3s',
    fill: theme.inputPlaceholderColorIdle,
    width: theme.dropdownArrowSize,
    height: theme.dropdownArrowSize,
  },
  dropdownArrowNormal: {
    marginRight: 10,
  },
  dropdownArrowOpen: {
    transform: 'rotate(180deg)',
  },
  dropdownArrowFocused: {
    fill: theme.inputColorHighlight,
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
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    cursor: 'pointer',
    userSelect: 'none',
    width: '100%',
    height: '100%',
    border: 0,
    transition: '0.5s',

    '&:focus': {
      color: theme.inputColorHighlight || '#007aff',
      outline: 'none',
    },
    '&:after': {
      content: '"."',
      visibility: 'hidden',
    },
  },
  selectLabelNormal: {
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightMedium,
    color: theme.inputColorIdle || '#54738c',
    padding: 8,
    minHeight: 44,
    backgroundColor: theme.inputBackgroundColor,
    fontSize: 14,
  },
  selectLabelWithPlaceholder: {
    paddingBottom: 5,
    paddingTop: 23,
  },
  selectLabelMini: {
    padding: 0,
    height: 26,
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
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    borderRadius: 6,
    border: `solid 1px #cfd8dc`,
    backgroundColor: theme.inputBackgroundColor,
    overflowY: 'auto',
  },
  dropdownWrapperNormal: {
    paddingTop: 10,
    paddingBottom: 10,
    maxHeight: 217,
  },
  dropdownWrapperMini: {
    maxHeight: 160,
  },
  dropdownSearchItemsWrapper: {
    overflowY: 'auto',
  },
  dropdownSearchItemsWrapperNormal: {
    maxHeight: 205,
  },
  dropdownSearchItemsWrapperMini: {
    maxHeight: 157,
  },
  dropdownItem: {
    paddingLeft: 18,
    paddingRight: 18,
    userSelect: 'none',
    cursor: 'pointer',

    color: theme.textColorSecondary,
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightRegular,
    fontSize: 14,

    '&:hover': {
      backgroundColor: '#eceff1',
    },
  },
  dropdownItemMini: {
    paddingLeft: 12,
    paddingRight: 12,
    '& div': {
      padding: 6,
    },
    '& label': {
      fontFamily: 'inherit',
      fontWeight: 'normal',
    }
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
  }
});
