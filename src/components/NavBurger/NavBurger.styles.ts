export default () => ({
  root: {
    width: 52,
    height: 52,
    position: 'relative',
    cursor: 'pointer',
    display: 'inline-block',
  },
  navburgerWrapper: {
    width: 'inherit',
    height: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  octagonInner: {
    transform: 'skewX(-30deg) rotate(60deg) skewX(30deg)',
    opacity: 1,
    cursor: 'pointer',
  },
  octagon: {
    overflow: 'hidden',
    display: 'inline-block',
    margin: '0 0',
    width: 'inherit',
    height: 'inherit',
    transform: 'rotate(0deg) skewX(30deg)',
    borderRadius: '.2em',
    '& *, *:before': {
      display: 'block',
      overflow: 'hidden',
      width: 'inherit',
      height: 'inherit',
      borderRadius: 'inherit',
    },
    '&:first-child $octagonInner:before, $image': {
      transform: 'skewX(-30deg) rotate(60deg) skewX(30deg)',
      background: '#000000',
      opacity: 0.05,
      content: '""',
    }
  },
  octagonWrapper: {
    width: 'inherit',
    height: 'inherit',
    position: 'absolute',
    left: 0,
    top: 0,
  }
});
