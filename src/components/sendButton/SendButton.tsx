import React from 'react';
import styles from './sendButton.module.scss';

interface SendButtonProps {
  value: string;
  onClick: () => void;
  className?: string;
}

const SendButton = ({ value, onClick, className }: SendButtonProps) => {
  return (
    <button className={`${styles.sendButton} ${className}`} onClick={onClick}>
      {value}
    </button>
  );
};

export default SendButton;
