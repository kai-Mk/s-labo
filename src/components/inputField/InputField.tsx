import React from 'react';
import styles from './inputField.module.scss';

interface InputFieldProps {
  htmlFor: string;
  label: string;
  children: React.ReactNode;
  errorMessage?: string;
  required?: boolean;
}

const InputField = ({
  htmlFor,
  label,
  children,
  errorMessage,
  required = false,
}: InputFieldProps) => {
  return (
    <div className={styles.input_groupe}>
      <label htmlFor={htmlFor} className={styles.input_label}>
        {label}
        {required && <span className={styles.input_required}>必須</span>}
      </label>
      {children}
      {errorMessage && <p className={styles.error_message}>{errorMessage}</p>}
    </div>
  );
};

export default InputField;
