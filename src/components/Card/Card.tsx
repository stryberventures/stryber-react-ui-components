import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import classNames from 'classnames';

import styles from './Card.styles';

/** Card */
export interface CardProps {
  className?: any;
  children: any;
}

const Card = (props: CardProps & React.HTMLProps<HTMLDivElement> & WithStyles<typeof styles>) => {
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

const Title = (props: TitleProps & React.HTMLProps<HTMLDivElement> & WithStyles<typeof styles>) => {
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

const Body = (props: BodyProps & React.HTMLProps<HTMLDivElement> & WithStyles<typeof styles>) => {
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

/** Wrappings */
const PropsWrappedStyledCard = (props: CardProps & React.HTMLProps<HTMLDivElement>) => <StyledCard{...props} />;
const PropsWrappedStyledTitle = (props:  TitleProps & React.HTMLProps<HTMLDivElement>) => <StyledTitle{...props} />;
const PropsWrappedStyledBody = (props: BodyProps & React.HTMLProps<HTMLDivElement>) => <StyledBody{...props} />;

/** Exports */
export default PropsWrappedStyledCard;
export {
  PropsWrappedStyledCard as Wrapper,
  PropsWrappedStyledTitle as Title,
  PropsWrappedStyledBody as Body,
};
