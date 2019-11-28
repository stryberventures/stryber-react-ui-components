import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import classNames from 'classnames';

import styles from './Card.styles';

/** Card */
export interface CardProps {
  className?: any;
  children: any;
}

const Card = (props: CardProps & WithStyles<typeof styles>) => {
  const {
    classes,
    className,
    children,
    ...rest
  } = props;
  return (
    <div
      { ...rest }
      className={ classNames([
        classes.root,
        className,
      ]) }
    >
      { children }
    </div>
  );
};

/** Title */
interface TitleProps {
  children: any;
  className?: any;
}

const Title = (props: TitleProps & WithStyles<typeof styles>) => {
  const {
    classes,
    children,
    className,
    ...rest
  } = props;
  return (
    <div
      { ...rest }
      className={ classNames([
        classes.title,
        className,
      ]) }
    >
      { children }
    </div>
  );
};

/** Body */
interface BodyProps {
  children: any;
  className?: any;
}

const Body = (props: BodyProps & WithStyles<typeof styles>) => {
  const {
    classes,
    className,
    children,
    ...rest
  } = props;
  return (
    <div
      { ...rest }
      className={ classNames([
        classes.body,
        className,
      ]) }
    >
      { children }
    </div>
  );
};

const StyledCard = withStyles(styles)(Card);
const StyledTitle = withStyles(styles)(Title);
const StyledBody = withStyles(styles)(Body);

export default StyledCard;
export {
  StyledCard as Wrapper,
  StyledTitle as Title,
  StyledBody as Body,
};
