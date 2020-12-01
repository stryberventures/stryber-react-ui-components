import * as React from 'react';
import classNames from 'classnames';

import useStyles from './LoadingSkeleton.styles';

interface ILoadingSkeletonProps {
  className?: string;
  style?: any;
}

const LoadingSkeleton: React.FC<ILoadingSkeletonProps> = ({
  className,
  style,
  }) => {
  const classes = useStyles();
  return (
    <div
      className={classNames(
      'loadingAnimation',
      classes.loadingSkeleton,
      className
    )}
      style={style} />
  );
};

export default LoadingSkeleton;
