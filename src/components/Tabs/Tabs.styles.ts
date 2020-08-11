import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  listTabs: {
    paddingLeft: 0,
    listStyle: "none",
    margin: 0,
  },
  tabTitleItem: {
    display: "inline-block",
    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
  },
  activeTabBorder: (props: any) => ({
    height: "2px",
    backgroundColor: "#007aff",
    position: "absolute",
    bottom: "0",
    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    willChange: "left, width",
    width: props && props.activeTabElement && props.activeTabElement.offsetWidth,
    left: props && props.activeTabElement && props.activeTabElement.offsetLeft,
  }),
  tabAnchorItem: (props: any) => {
    let activeTabStyles: any = {};

    if (props && props.isActiveTab) {
      activeTabStyles = {
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        cursor: "default",
        color: '#007aff',
        '& svg': {
          fill: '#007aff',
          marginRight: 5,
        }
      }
    }

    return {
      color: '#757575',
      padding: '5px 24px',
      paddingBottom: 7,
      cursor: 'pointer',
      fontSize: 16,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textDecoration: 'none',
      backgroundColor: 'transparent',
      outline: 'none',
      border: 0,
      '&:hover': {
        color: '#007aff',
        '& svg': {
          fill: '#007aff',
        }
      },
      '& svg': {
        fill: '#757575',
        marginRight: 5,
      },
      ...activeTabStyles,
    }
  },
  tabsContainer: {
    position: "relative",
  }
});

export default useStyles;
