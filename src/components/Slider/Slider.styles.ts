export default (theme: any) => ({
  root: {
    width: '100%',
    padding: 8,
  },
  slider: {
    '--webkitProgressPercent': '0%',
    '-webkit-appearance': 'none',
    '-moz-appearance': 'none',
    appearance: 'none',
    width: '100%',
    height: theme.sliderHeight,
    background: theme.sliderBgColor,
    outline: 'none',
    borderRadius: theme.sliderHeight / 2,
    margin: 0,
    padding: 0,
    '&::-webkit-slider-thumb': {
      '-webkit-appearance': 'none',
      appearance: 'none',
      width: theme.sliderThumbSize,
      height: theme.sliderThumbSize,
      background: '#fff',
      cursor: 'pointer',
      marginTop: ((theme.sliderThumbSize - theme.sliderHeight) / 2) * -1,
      borderRadius: theme.sliderThumbSize / 2,
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.32)'
    },
    '&::-moz-range-thumb': {
      '-moz-appearance': 'none',
      appearance: 'none',
      width: theme.sliderThumbSize,
      height: theme.sliderThumbSize,
      background: '#fff',
      cursor: 'pointer',
      marginTop: ((theme.sliderThumbSize - theme.sliderHeight) / 2) * -1,
      borderRadius: theme.sliderThumbSize / 2,
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.32)'
    },
    '&::-ms-thumb': {
      '-ms-appearance': 'none',
      appearance: 'none',
      width: theme.sliderThumbSize,
      height: theme.sliderThumbSize,
      background: '#fff',
      cursor: 'pointer',
      marginTop: ((theme.sliderThumbSize - theme.sliderHeight) / 2) * -1,
      borderRadius: theme.sliderThumbSize / 2,
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.32)'
    },
    '&::-webkit-slider-runnable-track': {
      height: theme.sliderHeight,
      backgroundImage: `linear-gradient(
            90deg,
            ${theme.sliderProgressColor} var(--webkitProgressPercent),
            ${theme.sliderBgColor} var(--webkitProgressPercent)
          )`,
      borderRadius: theme.sliderHeight / 2,
    },
    '&::-moz-range-progress': {
      height: theme.sliderHeight,
      backgroundColor: theme.sliderProgressColor,
      borderRadius: theme.sliderHeight / 2
    },
    '&::-ms-fill-lower': {
      height: theme.sliderHeight,
      backgroundColor: theme.sliderProgressColor,
      borderRadius: theme.sliderHeight / 2
    },
    '&::-moz-focus-outer': {
      border: 0,
    }
  },
  error: {
    color: theme.inputErrorMessageColor || '#ea3546',
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightLight,
    fontSize: 10,
    marginTop: 4,
  },
  /* Sizes */
  normal: {
    minWidth: 256,
    '& $slider': {
      minWidth: 256,
    },
  },
  small: {
    minWidth: 171,
    '& $slider': {
      minWidth: 171,
      height: theme.sliderSmallHeight,
      '&::-webkit-slider-thumb': {
        width: theme.sliderSmallThumbSize,
        height: theme.sliderSmallThumbSize,
        marginTop: ((theme.sliderSmallThumbSize - theme.sliderSmallHeight) / 2) * -1,
      },
      '&::-moz-range-thumb': {
        width: theme.sliderSmallThumbSize,
        height: theme.sliderSmallThumbSize,
        marginTop: ((theme.sliderSmallThumbSize - theme.sliderSmallHeight) / 2) * -1,
      },
      '&::-ms-thumb': {
        width: theme.sliderSmallThumbSize,
        height: theme.sliderSmallThumbSize,
        marginTop: ((theme.sliderSmallThumbSize - theme.sliderSmallHeight) / 2) * -1,
      },
      '&::-webkit-slider-runnable-track': {
        height: theme.sliderSmallHeight,
      },
      '&::-moz-range-progress': {
        height: theme.sliderSmallHeight,
      },
      '&::-ms-fill-lower': {
        height: theme.sliderSmallHeight,
      },
    }
  },
  large: {
    minWidth: 342,
    '& $slider': {
      minWidth: 342,
      height: theme.sliderLargeHeight,
      borderRadius: theme.sliderLargeHeight / 2,
      '&::-webkit-slider-thumb': {
        width: theme.sliderLargeThumbSize,
        height: theme.sliderLargeThumbSize,
        marginTop: ((theme.sliderLargeThumbSize - theme.sliderLargeHeight) / 2) * -1,
        borderRadius: theme.sliderLargeThumbSize / 2,
      },
      '&::-moz-range-thumb': {
        width: theme.sliderLargeThumbSize,
        height: theme.sliderLargeThumbSize,
        marginTop: ((theme.sliderLargeThumbSize - theme.sliderLargeHeight) / 2) * -1,
        borderRadius: theme.sliderLargeThumbSize / 2,
      },
      '&::-ms-thumb': {
        width: theme.sliderLargeThumbSize,
        height: theme.sliderLargeThumbSize,
        marginTop: ((theme.sliderLargeThumbSize - theme.sliderLargeHeight) / 2) * -1,
        borderRadius: theme.sliderLargeThumbSize / 2,
      },
      '&::-webkit-slider-runnable-track': {
        height: theme.sliderLargeHeight,
        borderRadius: theme.sliderLargeHeight / 2,
      },
      '&::-moz-range-progress': {
        height: theme.sliderLargeHeight,
        borderRadius: theme.sliderLargeHeight / 2,
      },
      '&::-ms-fill-lower': {
        height: theme.sliderLargeHeight,
        borderRadius: theme.sliderLargeHeight / 2,
      },
    }
  },
});
