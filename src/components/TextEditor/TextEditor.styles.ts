import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  editor_content: {
    marginBottom: '32px',

    '& .ck-content': {
      marginBottom: '16px',
      minHeight: '100px'
    },
    '& .ck .ck-placeholder:before': {
      color: '#95acbf'
    },
    '& .ck .ck-toolbar.ck-toolbar_grouping': {
      borderColor: '#eaeff7'
    },
    '& .ck-reset_all': {
      color: 'red',

      '& *': {
        color: '#242e42'
      }
    },
    '& .ck.ck-editor__main>.ck-editor__editable': {
      borderColor: '#eaeff7',
      color: '#54738c',
      transition: '.5s'
    },
    '& .ck.ck-editor__main>.ck-editor__editable.ck-focused': {
      borderColor: '#eaeff7'
    },
    '& label': {
      color: '#242e42',
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
  },
  inputLoading: {
    height: 140,
    width: '100%',
    borderRadius: 4
  },
  labelLoading: {
    height: 25 ,
    marginBottom: 20,
    width: 150,
    borderRadius: 4
  },
});

export default useStyles;
