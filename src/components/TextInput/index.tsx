import { UseFormRegister, ValidationRule } from "react-hook-form";
import styles from "./TextInput.module.css";
import { InputHTMLAttributes } from "react";
import { ErrorMessage } from "@hookform/error-message";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  register?: UseFormRegister<any>;
  options?: ValidationRule<any>;
}

export default function TextInput(props: TextInputProps) {
  const { ...rest } = props;
  return (
    <div className={styles.inputText}>
      <label htmlFor={props?.name}>
        <b>{props?.label}</b>
      </label>
      <input
        className={styles.input}
        placeholder="Input"
        {...props?.register?.(props?.name, props?.options)}
        {...rest}
      />
    </div>
  );
}
