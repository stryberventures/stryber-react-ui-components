import colors from './colors';

export default {
  /** Imports */
  imports: [
    `url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800')`,
  ],

  /** Text color */
  textColorPrimary: colors.black,
  textColorSecondary: colors.darkGray,
  textColorHighlight: colors.white,

  /** Background colors */
  backgroundColorPrimary: colors.white,

  /** Horizontal break line */
  hrColor: colors.lightGray,

  /** Fonts */
  fontFamily: 'Open Sans, sans-serif',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,

  /** Fonts sizes */
  bodyLargeFontSize: 16,
  bodyLargeLetterSpacing: 0.15,
  buttonsFontSize: 16,
  buttonsLetterSpacing: 0.15,
  subtitleFontSize: 14,
  subtitleLetterSpacing: 0.1,
  descriptionFontSize: 12,
  descriptionLetterSpacing: 0,
  messageFontSize: 10,
  messageLetterSpacing: 0,
  finePrintFontSize: 8,
  finePrintLetterSpacing: 0,

  /** Button colors */
  buttonColorPrimary: '#fff',
  buttonColorSecondary: colors.normal,

  buttonBackgroundColorPrimary: colors.normal,
  buttonBackgroundColorPrimaryHover: colors.darkHover,
  buttonBackgroundColorPrimaryActive: colors.normalActive,
  buttonBackgroundColorPrimaryDisabled: colors.lightGray2,
  buttonBackgroundColorSecondary: colors.white,
  buttonBackgroundColorSecondaryHover: colors.whiteHover,
  buttonBackgroundColorSecondaryActive: colors.whiteActive,
  buttonBackgroundColorSecondaryDisabled: colors.lightGray3,
  buttonBackgroundColorDisabled: colors.lightGray,
  buttonColorDisabled: colors.gray,

  /** Input fields */
  inputMaxHeightIdle: 44,
  inputLargeMaxHeightIdle: 56,
  inputColorIdle: colors.darkGray,
  inputColorBorderIdle: '#cccccc',
  inputColorBorderIdleHover: '#deebf6',
  inputColorBorderIdleActive: '#eef5fa',
  inputColorHighlight: colors.normal,
  inputColorHighlightHover: colors.normalHover,
  inputColorHighlightActive: colors.normalActive,
  inputColorSpecial: '#006add',
  inputColorSpecialHover: '#0073f1',
  inputColorSpecialActive: '#057dff',
  inputColorSelected: '#a8d4fd',
  inputColorError: colors.red,
  inputPlaceholderColorIdle: '#95acbf',
  inputErrorMessageColor: colors.danger,
  inputBackgroundColor: colors.white,
  inputBackgroundColorHover: colors.whiteHover,
  inputBackgroundColorActive: colors.whiteActive,
  inputBackgroundColorDisabled: colors.lightGray,
  inputPlaceholderColor: colors.lightGray2,
  inputValueColor: colors.darkGray2,

  /** Navbar */
  navbarItemColor: colors.gray,
  navbarItemColorHover: colors.grayHover,
  navbarItemColorActive: colors.grayActive,
  navbarItemColorHighlight: colors.normal,
  navbarItemColorHighlightHover: colors.normalHover,
  navbarItemColorHighlightActive: colors.normalActive,

  /** Sidebar */
  sidebarSectionColor: colors.black,
  sidebarItemColor: colors.gray,
  sidebarItemColorHover: colors.normal,
  sidebarItemColorActive: colors.grayActive,
  sidebarItemColorSelected: colors.black,
  sidebarItemBackgroundSelected: colors.lightGray4,
  sidebarItemColorHighlight: colors.normal,
  sidebarItemColorHighlightHover: colors.normalHover,
  sidebarItemColorHighlightActive: colors.normalActive,

  /** Badges */
  badgePrimaryBackgroundColor: colors.navyBlue,

  /** Table */
  tableBorderPrimary: '1px solid rgba(151, 151, 151, 0.39)',
  tableBoxShadow: '0 1px 1px 0 rgba(218, 218, 218, 0.5)',
  tableBackgroundColor: colors.lightGray4,
  tableBorderColor: colors.lightGray,
  tableHeaderTextColor: colors.darkerGray,

  /** Pagination */
  paginationBackgroundColor: colors.lightGray,
  paginationBackgroundColorActive: colors.normal,
  paginationTextColor: colors.darkGray,
  paginationTextColorActive: colors.white,

  /** Grid */
  gridColumnGap: 20,
  gridColumns: 12,

  gridSmBreakpointFallback: 540,
  gridSmBreakpoint: 576,
  gridMdBreakpointFallback: 720,
  gridMdBreakpoint: 768,
  gridLgBreakpointFallback: 960,
  gridLgBreakpoint: 992,
  gridXlBreakpointFallback: 1140,
  gridXlBreakpoint: 1200,

  /** Slider */
  sliderBgColor: colors.lightGray2,
  sliderProgressColor: colors.normal,
  sliderHeight: 8,
  sliderThumbSize: 24,
  sliderSmallHeight: 5,
  sliderSmallThumbSize: 16,
  sliderLargeHeight: 11,
  sliderLargeThumbSize: 32,

  /** Dropdown */
  dropdownArrowSize: 18,

  /** Tag */
  tagBackgroundColor: colors.normal,
};
