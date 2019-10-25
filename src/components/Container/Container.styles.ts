export default (theme: any) => ({
  root: {
    width: '100%',
    paddingRight: 15,
    paddingLeft: 15,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  [`@media (min-width: ${theme.smBreakpoint || 576}px)`]: {
    wrapper: {
      maxWidth: theme.smBreakpointFallback || 540,
    },
  },
  [`@media (min-width: ${theme.mdBreakpoint || 768}px)`]: {
    wrapper: {
      maxWidth: theme.mdBreakpointFallback || 720,
    },
  },
  [`@media (min-width: ${theme.lgBreakpoint || 992}px)`]: {
    wrapper: {
      maxWidth: theme.lgBreakpointFallback || 960,
    }
  },
  [`@media (min-width: ${theme.xlBreakpoint || 1200}px)`]: {
    wrapper: {
      maxWidth: theme.xlBreakpointFallback || 1140,
    }
  },
});
