export default (theme: any) => ({
  /** Root Wrapper */
  root: {
    position: 'relative',
    maxHeight: theme.inputMaxHeightIdle,
    borderRadius: 4,
    overflow: 'hidden',
    border: `solid 1px ${theme.inputColorBorderIdle || '#cfe2f2'}`,
    transition: 'color 0.5s, border 0.5s',
    backgroundColor: theme.inputBackgroundColor || '#fff',

    display: 'flex',
    justifyContent: 'space-between',

    '&:focus-within': {
      border: `solid 1px ${theme.inputColorHighlight || '#007aff'}`,
      outline: 'none',
    },
  },
  rootInvalid: {
    border: `solid 1px ${theme.inputColorError || '#d0021b'} !important`,
  },
  rootDisabled: {
    backgroundColor: '#f0f0f0',
  },
  fieldWrapper: {
    flex: 1,
    position: 'relative',
  },
  /** Append */
  append: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  /** Error message */
  errorMessage: {
    color: theme.inputErrorMessageColor || '#ea3546',
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightLight,
    fontSize: 10,
  },
  label: {
    fontSize: 12,
    marginBottom: 8,
    color: theme.inputValueColor,
    '&.error': {
      color: theme.inputErrorMessageColor || '#ea3546',
    },
    '&.disabledLabel': {
      color: '#cccccc'
    }
  },
  large: {
    '& $root': {
      maxHeight: theme.inputLargeMaxHeightIdle,
    },
    '& $label': {
      fontSize: 16,
    }
  }
});
