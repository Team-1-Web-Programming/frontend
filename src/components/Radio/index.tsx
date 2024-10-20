import { ChangeEvent } from "react";
import styles from "./RadioButton.module.css";

interface RadioButtonProps {
  name: string;
  label?: string;
  value?: string | number;
  selectedValue?: string | number;
  onChange: (value: string | number) => void;
}

const RadioButton = ({
  name,
  label,
  value,
  selectedValue,
  onChange,
}: RadioButtonProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <label className={styles.radioLabel}>
      <input
        type="radio"
        className={styles.radioInput}
        name={name}
        value={value}
        checked={selectedValue === value}
        onChange={handleChange}
      />
      <span className={styles.customRadio}></span>
      {label}
    </label>
  );
};

export default RadioButton;
