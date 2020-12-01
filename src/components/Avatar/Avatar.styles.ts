import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  root: {
    display: 'inline-block',
    width: '106px',
    height: '96px',
    position: 'relative'
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
    borderRadius: '.5em',
    '& *, *:before': {
      display: 'block',
      overflow: 'hidden',
      width: 'inherit',
      height: 'inherit',
      borderRadius: 'inherit',
    },
    '&:first-child $octagonInner:before, $image': {
      transform: 'skewX(-30deg) rotate(60deg) skewX(30deg)',
      background: '#cccccc',
      content: '""',
    }
  },
  avatarWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'inherit',
    height: 'inherit',
  },
  contentContainer: {
    position: 'absolute',
    zIndex: 2,
    width: 'inherit',
    height: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    top: 0,
    color: '#fff',
    fontSize: 28,
  },
  input: {
    width: 0.1,
    height: 0.1,
    opacity: 0,
    overflow: 'hidden',
    position: 'absolute',
    zIndex: -1,
  },
  inputLabel: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 'inherit',
    height: 'inherit',
    cursor: 'pointer'
  },
  plusIcon: {
    width: 32,
  },
  image: (image: string) => ({
    marginTop: -96,
    '&::before': {
      marginTop: '-0.5em',
      height: '106px',
      transform: 'skewX(-30deg) rotate(-120deg)',
      background: `url(${image})`,
      backgroundSize: 'cover',
      lineHeight: '106px',
      textAlign: 'center',
      content: '""',
    }
  }),
  mini: {
    width: '48.6px',
    height: '44px',
    '& $plusIcon': {
      width: 16
    },
    '& $octagon': {
      borderRadius: '.3em',
    },
    '& $contentContainer': {
      fontSize: 16
    },
    '& $image': {
      marginTop: -44,
      '&::before': {
        height: 55
      }
    }
  },
  small: {
    width: '61.8px',
    height: '56px',
    '& $plusIcon': {
      width: 18
    },
    '& $octagon': {
      borderRadius: '.3em',
    },
    '& $contentContainer': {
      fontSize: 20
    },
    '& $image': {
      marginTop: -56,
      '&::before': {
        height: 67,
      }
    },
  },
  normal: {
    width: '79.5px',
    height: '72px',
    '& $plusIcon': {
      width: 24
    },
    '& $contentContainer': {
      fontSize: 22
    },
    '& $image': {
      marginTop: -72,
      '&::before': {
        height: 79.5
      }
    },
  },
  large: {

  },
  initials: {
    '& $octagon': {
      '&:first-child $octagonInner:before': {
        background: '#007aff'
      }
    }
  },
  avatarLoading: {
    width: 72,
    height: 72,
    borderRadius: '50%',
    display: 'inline-block'
  },
  avatarSmallLoading: {
    width: 56,
    height: 56,
  },
  avatarMiniLoading: {
    width: 44,
    height: 44,
  },
  avatarLargeLoading: {
    width: 96,
    height: 96,
  },
});

export default useStyles;
