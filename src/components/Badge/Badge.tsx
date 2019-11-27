import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import classNames from 'classnames';
import styles from './Badge.styles';

/** Interfaces */
export interface IBadgeProps {
  children: any;
  value: any;
}

/** Main component */
const Badge = (props: IBadgeProps & React.HTMLProps<HTMLDivElement> & WithStyles<typeof styles>) => {
  const {
    classes,
    children,
    className,
    value = null,
    ...rest
  } = props;
  return (
    <div
      className={classNames([
        classes.root,
        className,
      ])}
      {...rest}
    >
      {/** Badge itself */}
      <div className={classes.badge}>
        {/** Badge content */}
        <div className={classes.badgeContent}>
          { value }
        </div>
      </div>
      {/** Content */}
      { children }
    </div>
  );
};

/** Wrappings */
const StyledBadge = withStyles(styles)(Badge);
const PropsWrappedStyledBadge = (props: IBadgeProps & React.HTMLProps<HTMLDivElement>) => <StyledBadge {...props} />;

/** Exports */
export default PropsWrappedStyledBadge;
export {
  PropsWrappedStyledBadge as Badge,
};
