import React from 'react';
import SkeletonBox from './Box';

const SkeletonText = ({ lines = 1, lineHeight = '1.25rem', width = '100%', animate = true, style = {} }) => (
  <>
    {[...Array(lines)].map((_, index) => (
      <SkeletonBox
        key={index}
        width={width}
        height={lineHeight}
        borderRadius="4px"
        animate={animate}
        style={{ marginBottom: '0.5rem', ...style }}
      />
    ))}
  </>
);

export default SkeletonText;
