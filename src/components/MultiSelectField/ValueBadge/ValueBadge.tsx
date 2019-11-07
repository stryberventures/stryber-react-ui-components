import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import styles from './ValueBadge.styles';
import { Close } from '../../Icons';

export interface IValueProps {
  classes?: any;
  children?: any;
  onClose: (e: React.BaseSyntheticEvent) => void;
}

const ValueBadge = (props: IValueProps & React.HTMLProps<HTMLDivElement> & WithStyles<typeof styles>) => {
  const {
    classes,
    onClose,
    children,
  } = props;
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        {children}
      </div>
      <div className={classes.closeSection} onClick={onClose}>
        <Close className={classes.closeIcon} />
      </div>
    </div>
  );
};

const StyledValueBadge = withStyles(styles)(ValueBadge);

export default StyledValueBadge;
export { StyledValueBadge as ValueBadge };
