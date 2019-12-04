export default (theme: any) => ({
  selectedFile: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    padding: '8px 2px 8px 0',
    borderBottom: `1px solid ${theme.inputColorBorderIdle}`
  },

  file: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    overflow: 'hidden',
  },

  fileName: {
    marginLeft: 8,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: '10px',
    letterSpacing: '0.25px',
    color: theme.inputColorIdle,
  },

  fileLogo: {
    fill: theme.inputColorIdle,
    width: 14,
  },

  closeLogo: {
    fill: theme.textColorHighlight,
    width: 10,
  },

  closeButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 18,
    height: 18,
    marginLeft: 8,
    backgroundColor: theme.inputColorBorderIdle,
    borderRadius: '100%',
    cursor: 'pointer',
  },
});
