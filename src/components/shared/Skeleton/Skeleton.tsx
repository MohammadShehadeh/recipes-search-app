import React from 'react';

import styles from './Skeleton.module.scss';

export const Skeleton = ({ style, ...restProps }: { style?: React.CSSProperties }) => {
  return (
    <div className={styles.skeleton} {...restProps}>
      <div className={styles.loading} style={{ ...style }}></div>
    </div>
  );
};
