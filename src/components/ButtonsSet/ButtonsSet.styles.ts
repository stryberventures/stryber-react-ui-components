export default (theme: any) => ({
  root: {
    border: `1px solid ${theme.buttonBackgroundColorPrimary}`,
    display: "inline-block",
    borderRadius: 6
  },
  button: {
    display: "inline-block",
    width: 71,
    border: 0,
    height: 24,
    padding: 6,
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap"
  }
});
