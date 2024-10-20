import { ChangeEvent } from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label className={styles.checkboxLabel}>
      <input
        type="checkbox"
        className={styles.checkboxInput}
        checked={checked}
        onChange={handleChange}
      />
      <span className={styles.customCheckbox}></span>
      {label}
    </label>
  );
};

export default Checkbox;
