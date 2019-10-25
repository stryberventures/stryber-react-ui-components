const getGridColumnStyle = (breakpointValue: number) => {
  // console.log('breakpointValue', breakpointValue);
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

    [`@media (min-width: ${theme.gridSmBreakpoint || 576}px)`]: {
      gridColumnEnd: (props: any) => getGridColumnStyle(props.sm),
      backgroundColor: 'red',
    },
    [`@media (min-width: ${theme.gridMdBreakpoint || 768}px)`]: {
      gridColumnEnd: (props: any) => getGridColumnStyle(props.md),
      backgroundColor: 'blue',
    },
    [`@media (min-width: ${theme.gridLgBreakpoint || 992}px)`]: {
      gridColumnEnd: (props: any) => getGridColumnStyle(props.lg),
      backgroundColor: 'yellow',
    },
    [`@media (min-width: ${theme.gridXlBreakpoint || 1200}px)`]: {
      gridColumnEnd: (props: any) => getGridColumnStyle(props.xl),
      backgroundColor: 'pink',
    },
  },
});
