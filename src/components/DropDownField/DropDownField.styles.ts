export default (theme:any) => ({
  root: {
    position: 'relative',
    cursor: 'pointer',
  },
  rootOpen: {
    zIndex: 99,
  },
  input: {
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
    padding: 10,
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    borderRadius: 6,
    border: `solid 1px #cfd8dc`,
    backgroundColor: theme.inputBackgroundColor,
  },
  dropdownArrow: {
    transition: '0.3s',
    fill: theme.inputPlaceholderColorIdle,
    width: 25,
    height: 25,
    marginRight: 10,
  },
  dropdownArrowOpen: {
    transform: 'rotate(180deg)',
  },
  dropdownArrowFocused: {
    fill: theme.inputColorHighlight,
  },
});
