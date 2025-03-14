'use client';

import React, { useState } from 'react';
import styles from '@/app/(public)/team/[teamId]/mypage/mypage.module.scss';
import AddIcon from '@mui/icons-material/AddBoxOutlined';
import CloseIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';

interface AddButtonProps {
  onClick: () => void;
  isInputField: boolean;
}

const AddButton = ({ onClick, isInputField }: AddButtonProps) => {
  return (
    <>
      <div className={styles.add_button} onClick={onClick}>
        {isInputField ? (
          <>
            <CloseIcon sx={{ height: '25px', width: '25px' }} />
            <p className={styles.add_text}>閉じる</p>
          </>
        ) : (
          <>
            <AddIcon sx={{ height: '25px', width: '25px' }} />
            <p className={styles.add_text}>タスクを追加する</p>
          </>
        )}
      </div>
    </>
  );
};

export default AddButton;
