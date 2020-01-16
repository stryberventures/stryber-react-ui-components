export default (theme: any) => ({
  root: {
    border: `1px solid ${theme.buttonBackgroundColorPrimary}`,
    display: "inline-block",
    borderRadius: 6,
    position: 'relative'
  },
  button: {
    display: "inline-block",
    width: 71,
    border: 0,
    height: 24,
    padding: 6,
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    backgroundColor: 'transparent'
  },
  active: {
    color: '#fff',
    transition: 'color 0.2s ease',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  background: {
    backgroundColor: theme.buttonBackgroundColorPrimary,
    width: 71,
    height: 24,
    position: 'absolute',
    zIndex: -1,
    borderRadius: 4,
    transition: 'left 0.2s ease'
  }
});
