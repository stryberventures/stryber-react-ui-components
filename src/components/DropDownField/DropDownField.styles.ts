export default (theme:any) => ({
  root: {
    position: 'relative',
    cursor: 'pointer',
  },
  rootOpen: {
    zIndex: 99,
  },
  inputNormal: {
    height: 47,
  },
  clickaway: {
    zIndex: 98,
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  dropdownWrapper: {
    position: 'absolute',
    top: 'calc(100% + 4px)',
    width: '100%',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    borderRadius: 6,
    border: `solid 1px #cfd8dc`,
    backgroundColor: theme.inputBackgroundColor,
  },
  dropdownWrapperNormal: {
    padding: 10,
  },
  dropdownWrapperMini: {
    padding: 2,
  },
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
});
