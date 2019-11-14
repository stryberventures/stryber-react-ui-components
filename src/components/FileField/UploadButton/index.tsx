import * as React from 'react';
import classNames from 'classnames';
import withStyles, {WithStyles} from 'react-jss';

import styles from './styles';

interface IAppendContentProps {
  files: any;
  errorMsg: string;
  classes: string;
  onClick: (e: any) => any;
}

const UploadButton = ({ classes, files, errorMsg, onClick }: IAppendContentProps & WithStyles<typeof styles>) => {
  const noFilesSelected = !files || (!files.name && !files.length);

  return (
    <button
      onClick={onClick}
      className={classNames([
        classes.uploadButton,
        errorMsg ? 'error' : '',
        noFilesSelected ? 'fileNotSelected' : 'fileSelected',
      ])}>
      {noFilesSelected ? 'Upload' : 'Change'}
    </button>
  );
};

export default withStyles(styles)(UploadButton);
