import React from 'react';

import cx from 'classnames';

import styles from './Container.module.scss';

type Size = 'full' | 'main';

interface ContainerProps {
  size?: Size;
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ size = 'main', children, className }: ContainerProps) => {
  return (
    <div className={cx(styles.container)}>
      <div
        className={cx(className, {
          [styles[size]]: size,
        })}
      >
        {children}
      </div>
    </div>
  );
};
