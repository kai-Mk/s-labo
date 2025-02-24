'use client';

import React from 'react';
import LogoutIcon from '@mui/icons-material/LogoutOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import { IconButton } from '@mui/material';
import { signOut } from 'next-auth/react';
import styles from './header.module.scss';

const Navigation = () => {
  const handleLogout = async () => {
    const isLogout = window.confirm('ログアウトしますか?');
    if (isLogout) {
      try {
        await signOut({ callbackUrl: '/login' });
      } catch (error) {
        console.error('ログアウト中のエラー', error);
        alert('ログアウト時にエラーが発生しました');
      }
    }
  };

  return (
    <nav className={styles.header_nav}>
      <IconButton
        aria-label="設定画面遷移アイコン"
        className={styles.header_nav_icon}
      >
        <SettingsIcon sx={{ width: '40px', height: '40px' }} />
      </IconButton>
      <IconButton
        aria-label="ログアウトアイコン"
        className={styles.header_nav_icon}
        onClick={() => void handleLogout()}
      >
        <LogoutIcon sx={{ width: '40px', height: '40px' }} />
      </IconButton>
    </nav>
  );
};

export default Navigation;
