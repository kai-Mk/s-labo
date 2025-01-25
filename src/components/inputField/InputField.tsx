import React from 'react';
import styles from './inputField.module.scss';

interface InputFieldProps {
  children: React.ReactNode;
  errorMessage?: string;
}

const InputField = ({ children, errorMessage }: InputFieldProps) => {
  return (
    <div className={styles.input_groupe}>
      {children}
      {errorMessage && <p className={styles.error_message}>{errorMessage}</p>}
    </div>
  );
};

export default InputField;
