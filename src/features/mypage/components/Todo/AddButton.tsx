'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import styles from '@/app/(public)/team/[teamId]/mypage/mypage.module.scss';
import AddIcon from '@mui/icons-material/AddBoxOutlined';

const AddButton = () => {
  const { teamId } = useParams<{ teamId: string }>();

  return (
    <div className={styles.add_button}>
      <AddIcon sx={{ height: '25px', width: '25px' }} />
      <p className={styles.add_text}>タスクを追加する</p>
    </div>
  );
};

export default AddButton;
