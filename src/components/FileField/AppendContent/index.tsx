import * as React from 'react';
import classNames from 'classnames';
import withStyles, {WithStyles} from 'react-jss';

import styles from './styles';

interface IAppendContentProps {
  files: any,
  errorMsg: string,
  classes: string,
}

const AppendContent = ({ classes, files, errorMsg }: IAppendContentProps & WithStyles<typeof styles>) => {
  return (
    <label
      htmlFor="cv"
      className={classNames([
        classes.label,
        errorMsg ? 'error' : '',
        files ? 'fileSelected' : 'fileNotSelected',
      ])}>
      {!files ? 'Upload' : 'Change'}
    </label>
  );
};

export default withStyles(styles)(AppendContent);
