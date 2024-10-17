import React from 'react';
import SkeletonBox from '@/components/Skeleton/Box';
import SkeletonText from '@/components/Skeleton/Text';

const BlogPostSkeleton = () => (
  <div style={{ padding: '1rem',display: 'flex', flexDirection:'column', alignItems: 'center', gap: 20 }}>
    <SkeletonText width="20%" lines={1} style={{ marginTop: '1rem' }} />
    <br></br>
    <br></br>
    <SkeletonBox width="90%" height="500px" borderRadius="8px" animate={true} />
    <SkeletonText width="60%" lines={1} style={{ marginTop: '1rem' }} />
    <SkeletonBox width="90%" height="50px" borderRadius="8px" animate={true} />
    <SkeletonText width="90%" lines={9} />
  </div>
);

export default BlogPostSkeleton;
