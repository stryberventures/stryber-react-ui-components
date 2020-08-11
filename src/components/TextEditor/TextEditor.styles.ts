import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  editor_content: {
    marginBottom: '32px',

    '& .ck-content': {
      marginBottom: '16px',
      minHeight: '100px'
    },
    '& .ck .ck-placeholder:before': {
      color: '#ccc'
    },
    '& .ck .ck-toolbar.ck-toolbar_grouping': {
      borderColor: '#cdcdcd'
    },
    '& .ck-reset_all': {
      color: 'red',

      '& *': {
        color: '#cacaca'
      }
    },
    '& .ck.ck-editor__main>.ck-editor__editable': {
      borderColor: '#cdcdcd',
      color: '#cfcfcf',
      transition: '.5s'
    },
    '& .ck.ck-editor__main>.ck-editor__editable.ck-focused': {
      borderColor: '#cdcdcd'
    },
    '& label': {
      color: '#000',
      fontSize: '16px',
      lineHeight: '1.57',
      marginBottom: '20px',
      display: 'block',
      fontFamily: 'Open Sans',
      fontWeight: '600',

      '&:first-letter': {
        textTransform: 'uppercase'
      }
    },
    '& .ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable': {
      borderBottomLeftRadius: '8px',
      borderBottomRightRadius: '8px',
      marginBottom: '0'
    },
    '& .ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar': {
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
      backgroundColor: 'transparent'
    }
  },
  errorMessage: {
    color: '#ea3546',
    fontWeight: 300,
    fontSize: 10
  },
  editor_content_error: {
    '& .ck.ck-editor__main>.ck-editor__editable': {
      borderColor: '#ea3546'
    },
    '& .ck.ck-editor__main>.ck-editor__editable.ck-focused': {
      borderColor: '#ea3546'
    }
  }
});

export default useStyles;
