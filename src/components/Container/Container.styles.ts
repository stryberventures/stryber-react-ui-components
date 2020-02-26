export default (theme: any) => ({
  root: {
    width: '100%',
    paddingRight: 15,
    paddingLeft: 15,
    marginRight: 'auto',
    marginLeft: 'auto',

    [`@media (min-width: ${theme.gridSmBreakpoint || 576}px)`]: {
      maxWidth: theme.gridSmBreakpointFallback || 540,
    },
    [`@media (min-width: ${theme.gridMdBreakpoint || 768}px)`]: {
      maxWidth: theme.gridMdBreakpointFallback || 720,
    },
    [`@media (min-width: ${theme.gridLgBreakpoint || 992}px)`]: {
      maxWidth: theme.gridLgBreakpointFallback || 960,
    },
    [`@media (min-width: ${theme.gridXlBreakpoint || 1200}px)`]: {
      maxWidth: theme.gridXlBreakpointFallback || 1140,
    },
  },
});
