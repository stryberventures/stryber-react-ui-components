import * as React from 'react';
import classNames from 'classnames';

import { Plus } from '../Icons';
import useStyles from './Avatar.styles';


interface ITagProps {
  sizeVariant?: 'normal' | 'small' | 'large' | 'mini';
  shape?: 'flat' | 'round' | 'circle';
  className?: any;
  initials?: string;
  image?: string;
}

const Avatar = (props: ITagProps) => {
  const {
    sizeVariant = 'normal',
    initials,
    image,
    className,
    ...rest
  } = props;
  const classes = useStyles(image)

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
  </div>)

  return (
    <div className={classNames([
      classes.root,
      classes[sizeVariant],
      initials ? classes.initials : null,
      className,
    ])}>
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
