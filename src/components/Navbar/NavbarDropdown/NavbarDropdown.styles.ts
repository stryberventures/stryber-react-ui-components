import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  navbarDropdown: {
    height: 44,
    fontSize: 16,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    cursor: 'pointer'
  },
  downArrow: {
    marginTop: 2,
  },
  title: {
    margin: [0, 8],
  },
  options: {
    position: 'absolute',
    top: 55,
    right: 0,
    width: 178,
    display: 'flex',
    flexDirection: 'column',
    padding: [8, 0],
    background: '#fff',
    borderRadius: 6,
    boxShadow: '0 4px 8px 0 rgba(56, 96, 165, 0.15)',
  },
  optionButton: {
    background: '#fff',
    textAlign: 'left',
    padding: [0, 16],
    height: 30,
    border: 'none',
    cursor: 'pointer',
    color: '#1d1d1b',
    fontSize: 14,
    '&:hover': {
      background: '#f9f9f9'
    }
  }
});

export default useStyles;
