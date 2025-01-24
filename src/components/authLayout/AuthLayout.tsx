import React from 'react';
import Image from 'next/image';
import logo from '@/assets/images/s-labo_logo.png';
import styles from './auth.module.scss';

interface AuthLayoutProps {
  title: string;
  children: React.ReactNode;
}

const AuthLayout = ({ title, children }: AuthLayoutProps) => {
  return (
    <div className={styles.auth}>
      <div className={styles.auth_header}></div>
      <div className={styles.auth_box}>
        <Image
          src={logo}
          alt="ロゴ"
          className={styles.auth_logo}
          width="200"
          height="50"
          priority
        />
        <h1 className={styles.auth_title}>{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
