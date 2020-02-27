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
  fontWeightMedium: 600,
  fontWeightSemiBold: 700,
  fontWeightBold: 800,

  /** Button colors */
  buttonColorPrimary: '#fff',
  buttonColorSecondary: colors.normal,

  buttonBackgroundColorPrimary: colors.normal,
  buttonBackgroundColorPrimaryHover: colors.normalHover,
  buttonBackgroundColorPrimaryActive: colors.normalActive,
  buttonBackgroundColorSecondary: colors.white,
  buttonBackgroundColorSecondaryHover: colors.whiteHover,
  buttonBackgroundColorSecondaryActive: colors.whiteActive,
  buttonBackgroundColorDisabled: colors.lightGray,
  buttonColorDisabled: colors.gray,

  /** Input fields */
  inputMaxHeightIdle: 43,
  inputColorIdle: colors.darkGray,
  inputColorBorderIdle: '#cfe2f2',
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
  sidebarItemColorHover: colors.grayHover,
  sidebarItemColorActive: colors.grayActive,
  sidebarItemColorSelected: colors.black,
  sidebarItemColorHighlight: colors.normal,
  sidebarItemColorHighlightHover: colors.normalHover,
  sidebarItemColorHighlightActive: colors.normalActive,

  /** Badges */
  badgePrimaryBackgroundColor: colors.navyBlue,

  /** Table */
  tableBorderPrimary: '1px solid rgba(151, 151, 151, 0.39)',
  tableBoxShadow: '0 1px 1px 0 rgba(218, 218, 218, 0.5)',
  tableBackgroundColor: colors.lightGray,
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
};
