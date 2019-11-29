import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import classNames from 'classnames';
import styles from './Badge.styles';

/** Interfaces */
export interface IBadgeProps extends React.HTMLProps<HTMLDivElement> {
  children: any;
  className?: any;
  label: any;
}

/** Main component */
const Badge = (props: IBadgeProps & WithStyles<typeof styles>) => {
  const {
    classes,
    children,
    className,
    label = null,
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
          { label }
        </div>
      </div>
      {/** Content */}
      { children }
    </div>
  );
};

/** Wrappings */
const StyledBadge = withStyles(styles)(Badge);
const PropsWrappedStyledBadge = (props: IBadgeProps) => <StyledBadge {...props} />;

/** Exports */
export default PropsWrappedStyledBadge;
export {
  PropsWrappedStyledBadge as Badge,
};
