import * as React from 'react';
import withStyles, {WithStyles} from 'react-jss';

import { Close, File } from '../../Icons';
import styles from './SelectedFile.styles';

interface ISelectedFileProps {
  fileName: string,
  removeFile: any,
  classes: string,
}

const SelectedFile = ({ classes, fileName, removeFile }: ISelectedFileProps & WithStyles<typeof styles>) => {
  return (
    <li className={classes.selectedFile}>
      <span className={classes.file}>
        <File className={classes.fileLogo} viewBox="0 0 14 18" />
        <span className={classes.fileName}>{fileName}</span>
      </span>
      <span className={classes.closeButton} onClick={() => removeFile(fileName)}>
        <Close className={classes.closeLogo} />
      </span>
    </li>

  );
};


/** Wrappers */
const StyledSelectedFile = withStyles(styles)(SelectedFile);
export default StyledSelectedFile;

/** Exports */
export {
  StyledSelectedFile as SelectedFile,
};
