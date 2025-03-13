'use client';

import React, { useState } from 'react';
import styles from '@/app/(public)/team/[teamId]/mypage/mypage.module.scss';
import AddIcon from '@mui/icons-material/AddBoxOutlined';

interface AddButtonProps {
  onClick: () => void;
}

const AddButton = ({ onClick }: AddButtonProps) => {
  return (
    <>
      <div className={styles.add_button} onClick={onClick}>
        <AddIcon sx={{ height: '25px', width: '25px' }} />
        <p className={styles.add_text}>タスクを追加する</p>
      </div>
    </>
  );
};

export default AddButton;
