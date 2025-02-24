import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.scss';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header_logo}>
        <Link href="/" className={styles.header_logo_link}>
          <Image
            src="/s-labo_logo.png"
            alt="ロゴ"
            width="150"
            height="40"
            priority
          />
        </Link>
      </h1>
      <Navigation />
    </header>
  );
};

export default Header;
