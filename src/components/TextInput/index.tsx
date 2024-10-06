import styles from './TextInput.module.css'

export default function TextInput(props?: any) {
  const { ...rest } = props;
  return (
    <div className={styles.inputText}>
      <div>{props?.label}</div>
      <input className={styles.input} placeholder='Input' {...rest} />
    </div>
  );
}
