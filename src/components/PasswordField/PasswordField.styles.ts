export default (theme: any) => ({
  root: {

  },
  append: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
  },
  icon: {
    width: 20,
    transition: '0.3s',
    fill: theme.inputColorBorderIdle || '#cfe2f2',

    '&:hover': {
      fill: theme.inputColorHighlight || '#007aff',
    },
  }
});
