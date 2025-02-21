import React from 'react';
import styles from './sendButton.module.scss';

interface SendButtonProps {
  value: string;
  className?: string;
  onClick?: () => void;
}

const SendButton = ({ value, className, onClick }: SendButtonProps) => {
  return (
    <button
      className={`${styles.send_button} ${className}`}
      type="submit"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default SendButton;
