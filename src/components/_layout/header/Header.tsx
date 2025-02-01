'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/s-labo_logo.png';
import LogoutIcon from '@mui/icons-material/LogoutOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import IconButton from '@mui/material/IconButton';
import { signOut } from 'next-auth/react';
import styles from './header.module.scss';

const Header = () => {
  const handleLogout = async () => {
    const isLogout = window.confirm('ログアウトしますか?');
    if (isLogout) {
      try {
        await signOut({ callbackUrl: '/login' });
      } catch (error) {
        console.error('ログアウト中にエラーが発生しました:', error);
      }
    }
  };
  return (
    <header className={styles.header}>
      <h1 className={styles.header_logo}>
        <Link href="/" className={styles.header_logo_link}>
          <Image src={logo} alt="ロゴ" width="150" height="40" priority />
        </Link>
      </h1>
      <nav className={styles.header_nav}>
        <IconButton aria-label="設定画面" className={styles.header_nav_icon}>
          <SettingsIcon sx={{ width: '40px', height: '40px' }} />
        </IconButton>
        <IconButton
          aria-label="ログアウト"
          className={styles.header_nav_icon}
          onClick={() => void handleLogout()}
        >
          <LogoutIcon sx={{ width: '40px', height: '40px' }} />
        </IconButton>
      </nav>
    </header>
  );
};

export default Header;
