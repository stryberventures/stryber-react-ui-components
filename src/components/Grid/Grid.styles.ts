const getGridColumnStyle = (breakpointValue: number) => {
  if (!breakpointValue) return 'span 1';
  return `span ${breakpointValue}`;
};

const getGridTemplateColumns = (columns: number) => {
  return `repeat(${columns}, 1fr)`;
};

export default (theme: any) => ({
  /** Row */
  row: {
    display: 'grid',
    gridGap: theme.gridColumnGap,
    gridTemplateColumns: getGridTemplateColumns(theme.gridColumns),
    width: '100%',
  },

  /** Column */
  col: {
    gridColumnEnd: (props: any) => getGridColumnStyle(props.xs || theme.gridColumns),

    [`@media (min-width: ${theme.gridSmBreakpoint}px)`]: {
      gridColumnEnd: (props: any) => getGridColumnStyle(props.sm),
    },
    [`@media (min-width: ${theme.gridMdBreakpoint}px)`]: {
      gridColumnEnd: (props: any) => getGridColumnStyle(props.md),
    },
    [`@media (min-width: ${theme.gridLgBreakpoint || 992}px)`]: {
      gridColumnEnd: (props: any) => getGridColumnStyle(props.lg),
    },
    [`@media (min-width: ${theme.gridXlBreakpoint || 1200}px)`]: {
      gridColumnEnd: (props: any) => getGridColumnStyle(props.xl),
    },
  },
});
