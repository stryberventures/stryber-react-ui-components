import React, { CSSProperties } from 'react';

/** Style */
import withStyles from 'react-jss';
import styles from './styles';

/** Components */
import { MdClose } from 'react-icons/md';

export interface IProps {
  classes?: any;
  children?: any;
  onClose: () => void;
}

const MultiSelectBadge = ({ classes, children, onClose }: any) => (
  <div className={classes.wrapper}>
    <div className={classes.content}>
      { children }
    </div>
    <div className={classes.closeSection} onClick={onClose} >
      <MdClose className={classes.closeIcon} />
    </div>
  </div>
);

export default withStyles(styles)(MultiSelectBadge);
