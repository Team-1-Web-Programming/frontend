"use client";
import React, { useState } from "react";
import styles from "./Switch.module.css";

const SwitchButton = (props: { onChange?: any; isChecked?: boolean }) => {
  const { isChecked: isCheck = false } = props;
  const [isChecked, setIsChecked] = useState(isCheck);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (props?.onChange) {
      props.onChange(!isChecked);
    }
  };

  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={isChecked} onChange={handleToggle} />
      <span className={styles.slider}></span>
    </label>
  );
};

export default SwitchButton;
