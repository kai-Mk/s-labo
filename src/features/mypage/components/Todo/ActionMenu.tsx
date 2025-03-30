'use client';

import React, { useState } from 'react';
import styles from '@/app/(public)/team/[teamId]/mypage/mypage.module.scss';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { IconButton } from '@mui/material';

const ActionMenu = () => {
  const [isActionMenu, setIsActionMenu] = useState(false);
  return (
    <div className={styles.action_menu}>
      <IconButton>
        <DehazeIcon
          className={styles.action_menu_button}
          onClick={() => setIsActionMenu(!isActionMenu)}
        />
      </IconButton>
      <ul
        className={`${styles.action_menu_list} ${isActionMenu ? styles.active : ''}`}
      >
        <li className={styles.action_menu_item}>編集</li>
        <li className={`${styles.action_menu_item} ${styles.delete}`}>削除</li>
      </ul>
    </div>
  );
};

export default ActionMenu;
