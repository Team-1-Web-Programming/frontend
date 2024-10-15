"use client";
import React, { useState } from 'react';
import styles from './Switch.module.css'; // Import the CSS module

const SwitchButton: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className={styles.switch}>
      <input 
        type="checkbox" 
        checked={isChecked} 
        onChange={handleToggle} 
      />
      <span className={styles.slider}></span>
    </label>
  );
};

export default SwitchButton;
