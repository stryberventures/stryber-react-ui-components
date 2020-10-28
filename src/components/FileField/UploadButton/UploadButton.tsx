import * as React from 'react';
import classNames from 'classnames';
import withStyles, { WithStyles } from 'react-jss';
import styles from './UploadButton.styles';

/** Interfaces */
interface IAppendContentProps {
  files: any;
  errorMsg: string;
  classes: string;
  onClick: (e: any) => any;
  disabled?: boolean;
}

/** Component */
const UploadButton = (props: IAppendContentProps & WithStyles<typeof styles>) => {
  const {
    classes,
    files,
    errorMsg,
    onClick,
    disabled = false,
  } = props;
  const noFilesSelected = !files || (!files.name && !files.length);

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classNames([
        classes.uploadButton,
        errorMsg ? 'error' : '',
        noFilesSelected ? 'fileNotSelected' : 'fileSelected',
        disabled ? 'disabled' : null,
      ])}>
      {noFilesSelected ? 'Upload' : 'Change'}
    </button>
  );
};

/** Wrappers */
const StyledUploadButton = withStyles(styles)(UploadButton);
export default StyledUploadButton;

/** Exports */
export {
  StyledUploadButton as UploadButton,
};
