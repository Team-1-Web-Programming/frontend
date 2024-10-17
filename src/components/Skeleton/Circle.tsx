// components/SkeletonCircle.js
import React from "react";
import SkeletonBox from "./Box";

const SkeletonCircle = ({ size = "50px", animate = true, style = {} }) => (
  <SkeletonBox
    width={size}
    height={size}
    borderRadius="50%"
    animate={animate}
    style={style}
  />
);

export default SkeletonCircle;
