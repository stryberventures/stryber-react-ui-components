import * as React from 'react';
import classNames from 'classnames';

import { Plus } from '../Icons';
import useStyles from './Avatar.styles';


interface IAvatarProps {
  sizeVariant?: 'normal' | 'small' | 'large' | 'mini';
  className?: any;
  initials?: string;
  image?: string;
  onClick?: (e: React.SyntheticEvent) => void;
  loading?: boolean;
  loadingStyle?: any;
  loadingClassName?: string;
}

const Avatar = (props: IAvatarProps & React.HTMLAttributes<HTMLInputElement>) => {
  const {
    sizeVariant = 'normal',
    initials,
    image,
    className,
    onClick,
    loading,
    loadingClassName,
    loadingStyle = {},
    ...rest
  } = props;
  const classes = useStyles(image);

  const getContent = () => (
    <div className={classes.contentContainer}>
      {!initials ? (<>
          <Plus className={classes.plusIcon}/>
          <label htmlFor="avatarInput" className={classes.inputLabel} />
          <input
            type="file"
            className={classes.input}
            id="avatarInput"
            name="avatar"
            accept="image/*"
            {...rest}
          />
        </>)
        :
        initials
      }
  </div>);

  if (loading) {
    return <div className={classNames(
      'loadingAnimation',
      classes.avatarLoading,
      { [classes.avatarSmallLoading]: sizeVariant === 'small' },
      { [classes.avatarMiniLoading]: sizeVariant === 'mini' },
      { [classes.avatarLargeLoading]: sizeVariant === 'large' },
      loadingClassName
    )}
    style={loadingStyle}
    />
  }

  return (
    <div className={classNames([
      classes.root,
      classes[sizeVariant],
      initials ? classes.initials : null,
      className,
    ])} onClick={onClick}>
      {!image && getContent()}
      <div className={classes.avatarWrapper}>
        <div className={classes.octagon}>
          <div className={classes.octagonInner}>
            {image && <div className={classes.image}/>}
          </div>
        </div>
      </div>
      </div>)
}

export default Avatar;
