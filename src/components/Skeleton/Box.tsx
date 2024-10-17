import React from 'react';
import styles from './Skeleton.module.css';

const SkeletonBox = ({ width = '100%', height = '1rem', borderRadius = '4px', style = {}, animate = true }) => (
  <div
    className={`${styles.skeleton} ${animate ? styles.animate : ''}`}
    style={{ width, height, borderRadius, ...style }}
  />
);

export default SkeletonBox;
