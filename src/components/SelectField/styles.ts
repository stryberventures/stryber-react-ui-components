export default (theme: any) => ({
  /** Button */
  wrapper: {
    position: 'relative',
    width: '100%',
    borderRadius: 8,
    minHeight: 43,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: 'solid 1px transparent',
    transition: '0.5s',
    cursor: 'pointer',
    userSelect: 'none',
    '&_primary': {
      backgroundColor: theme.inputBackgroundColorLight,
      border: `solid 1px ${theme.inputBorderColorPrimary}`,
      '&:hover': {
        backgroundColor: theme.inputBackgroundColorLight,
      },
    },
    '&_glance': {
      backgroundColor: theme.inputBackgroundColorPrimary,
      border: 'solid 1px transparent',
      '&:hover': {
        backgroundColor: theme.inputBackgroundColorPrimaryHover,
      },
    },
    '&_textOnly': {
      border: 'solid 1px transparent',
      '&:hover': {
      },
    },
    '&_lightOutline': {
      border: `solid 1px ${theme.inputBackgroundColorPrimary}`,
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      },
    }
  },
  opened: {
    border: 'solid 1px #9fa2b4',
  },
  placeholder: {
    color: theme.inputPlaceholderTextColorPrimary,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    fontSize: 14,
    justifyContent: 'flex-start',
    paddingLeft: 15,
  },
  selectedValue: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: 14,
    paddingLeft: 15,
    '&_primary': {
      color: theme.textColorPrimary,
    },
    '&_glance': {
      color: theme.textColorPrimary,
    },
    '&_textOnly': {
      color: theme.textColorPrimary,
    },
    '&_lightOutline': {
      color: theme.textColorLight,
    }
  },
  expandSection: {
    width: 30,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  expandIcon: {
    width: 20,
    height: 20,
  },
  /** Dropdown */
  dropdownContainer: {
    minWidth: '100%',
    position: 'absolute',
    top: 'calc(100% + 4px)',
    zIndex: 99,
    backgroundColor: theme.inputBackgroundColorLight,
    borderRadius: 5,
    boxShadow: '0 4px 12px 0 rgba(42, 34, 100, 0.11)',
    display: 'flex',
    flexDirection: 'column',
    border: 'solid 0.9px #f0f0f0',
    '&_primary': {},
    '&_glance': {},
    '&_textOnly': {},
    '&_lightOutline': {
      backgroundColor: theme.inputBackgroundColorHighlight,
    }
  },
  dropdownContainerRight: {
    right: 0,
  },
  item: {
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    userSelect: 'none',
    minHeight: 42,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 15,
    fontSize: 14,
    transition: '0.5s',
    borderRadius: 5,
    margin: 1,
    '&:hover': {
      backgroundColor: theme.inputBackgroundColorHighlightHover,
    },
    '&_primary': {
      '&:hover': {
        backgroundColor: theme.inputBackgroundColorPrimaryHover,
      },
    },
    '&_glance': {
      '&:hover': {
        backgroundColor: theme.inputBackgroundColorPrimaryHover,
      },
    },
    '&_textOnly': {
      '&:hover': {
        backgroundColor: theme.inputBackgroundColorPrimaryHover,
      },
    },
    '&_lightOutline': {
      '&:hover': {
        backgroundColor: theme.inputBackgroundColorHighlightHover,
      },
    }
  },
  selectedItem: {
    color: theme.textColorLight,
    margin: 1,
    backgroundColor: theme.buttonColorPrimary,
    '&:hover': {
      backgroundColor: theme.buttonColorPrimaryHover,
    },
  },
  textOnlySelectedItem: {
  },
  primarySelectedItem: {
  },
  lightOutlineSelectedItem: {
  },
  itemBody: {
    paddingLeft: 5,
    paddingRight: 25,
  },
  itemCheckbox: {
    marginRight: 10,
    paddingRight: 10,
  },
  /** Clickaway */
  clickAway: {
    cursor: 'auto',
    display: 'block',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    zIndex: 98,
  },
});
