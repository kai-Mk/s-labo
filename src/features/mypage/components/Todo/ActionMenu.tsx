'use client';

import React from 'react';
import styles from '@/app/(public)/team/[teamId]/mypage/mypage.module.scss';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { IconButton } from '@mui/material';

const ActionMenu = () => {
  return (
    <>
      <IconButton>
        <DehazeIcon className={styles.action_menu_button} />
      </IconButton>
      <div className={styles.action_menu_box}></div>
    </>
  );
};

export default ActionMenu;
