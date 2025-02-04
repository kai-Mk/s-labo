import React from 'react';
import styles from './inputField.module.scss';

interface InputFieldProps {
  htmlFor: string;
  label: string;
  children: React.ReactNode;
  errorMessage?: string;
}

const InputField = ({
  htmlFor,
  label,
  children,
  errorMessage,
}: InputFieldProps) => {
  return (
    <div className={styles.input_groupe}>
      <label className={styles.input_label} htmlFor={htmlFor}>
        {label}
      </label>
      {children}
      {errorMessage && <p className={styles.error_message}>{errorMessage}</p>}
    </div>
  );
};

export default InputField;
