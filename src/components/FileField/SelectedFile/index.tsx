import * as React from 'react';
import withStyles, {WithStyles} from 'react-jss';

import { Close, File } from '../../Icons';
import theme from '../../../styles/theme';
import styles from './styles';

interface ISelectedFileProps {
  fileName: string,
  removeFile: any,
  classes: string,
}

const SelectedFile = ({ classes, fileName, removeFile }: ISelectedFileProps & WithStyles<typeof styles>) => {
  return (
    <li className={classes.selectedFile}>
      <span className={classes.file}>
        <File fill={theme.inputColorIdle} viewBox="0 0 14 18" width={14} />
        <span className={classes.fileName}>{fileName}</span>
      </span>
      <span className={classes.closeButton} onClick={() => removeFile(fileName)}>
        <Close fill={theme.textColorHighlight} width={10} />
      </span>
    </li>

  );
};

export default withStyles(styles)(SelectedFile);
