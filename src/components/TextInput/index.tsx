import { UseFormRegister, ValidationRule } from "react-hook-form";
import styles from "./TextInput.module.css";
import { InputHTMLAttributes } from "react";
import { ErrorMessage } from "@hookform/error-message";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string; // Name for the input field
  label: string;
  type?: string; // Label for the input field
  placeholder?: string; // Optional placeholder
  register?: UseFormRegister<any>; // Type for the `register` function from React Hook Form
  options?: ValidationRule<any>; // Custom validation options for `register`
}

export default function TextInput(props: TextInputProps) {
  const { ...rest } = props;
  return (
    <div className={styles.inputText}>
      <label htmlFor={props?.name}>{props?.label}</label>
      <input
        className={styles.input}
        placeholder="Input"
        {...props?.register?.(props?.name, props?.options)}
        {...rest}
      />
    </div>
  );
}
