import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import classNames from 'classnames';

import styles from './Card.styles';

/** Card */
interface CardProps {
  children: any;
  [key: string]: any;
}

const Card = ({
  classes,
  children,
  ...rest
}: CardProps & WithStyles<typeof styles>) => {
  // const renderContent = () => <span className={ classes.content }>{ children }</span>;
  return (
    <div
      { ...rest }
      className={ classNames([
        classes.root,
      ]) }
    >
      { children }
    </div>
  );
};

/** Title */
interface TitleProps {
  children: any;
  [key: string]: any;
}

const Title = ({
  classes,
  children,
  ...rest
}: TitleProps & WithStyles<typeof styles>) => {
  // const renderContent = () => <span className={ classes.content }>{ children }</span>;
  return (
    <div
      { ...rest }
      className={ classNames([
        classes.title,
      ]) }
    >
      { children }
    </div>
  );
};

/** Body */
interface BodyProps {
  children: any;
  [key: string]: any;
}

const Body = (props: BodyProps & WithStyles<typeof styles>) => {
  const {
    classes,
    children,
    ...rest
  } = props;
  return (
    <div
      { ...rest }
      className={ classNames([
        classes.body,
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
