import * as React from 'react';
import classNames from 'classnames';
import withStyles, { WithStyles } from 'react-jss';
import { ReactNode } from 'react';

import styles from './Tag.styles';
import { TagClose } from '../Icons';


interface ITagProps {
  children: ReactNode;
  sizeVariant?: 'normal' | 'small' | 'large';
  shape?: 'flat' | 'round' | 'circle';
  onClick?: (e: React.SyntheticEvent) => void;
  onClose?: (e: React.SyntheticEvent) => void;
  className?: any;
}

const Tag = (props: ITagProps & WithStyles<typeof styles>) => {
  const {
    children,
    classes,
    shape = 'circle',
    sizeVariant = 'normal',
    className,
    onClick,
    onClose,
  } = props;
  return (
    <span
      onClick={(e) => {onClick && onClick(e)}}
      className={classNames([
        classes.root,
        classes[shape]],
        classes[sizeVariant],
        className)}
    >
      {children}
      <div onClick={(e) => {onClose && onClose(e)}} className={classes.closeBlock}>
        <TagClose />
      </div>
  </span>)
}

/** Wrappers */
const StyledTag = withStyles(styles)(Tag);
const PropsWrappedStyledTag = (props: ITagProps) => <StyledTag {...props} />;

/** Exports */
export default PropsWrappedStyledTag;
export {
  PropsWrappedStyledTag as Tag,
};
