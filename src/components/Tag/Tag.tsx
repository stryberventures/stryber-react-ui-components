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
  disabled?: boolean;
  loading?: boolean;
  loadingStyle?: any;
  loadingClassName?: string;
}

const Tag = (props: ITagProps & WithStyles<typeof styles>) => {
  const {
    children,
    classes,
    shape = 'circle',
    sizeVariant = 'normal',
    className,
    disabled,
    onClick,
    onClose,
    loading,
    loadingClassName,
    loadingStyle = {},
  } = props;

  if (loading) {
    return <div className={classNames(
      'loadingAnimation',
      classes.tagLoading,
      { [classes.tagSmallLoading]: sizeVariant === 'small' },
      { [classes.tagLargeLoading]: sizeVariant === 'large' },
      loadingClassName
    )} style={loadingStyle} />
  }

  return (
    <span
      onClick={(e) => {onClick && onClick(e)}}
      className={classNames([
        classes.root,
        disabled ? classes.rootDisabled : null,
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
