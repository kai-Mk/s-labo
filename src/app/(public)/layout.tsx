import React from 'react';
import Header from '@/components/_layout/header/Header';
import Sidebar from '@/components/_public/Sidebar';
import styles from './public.module.scss';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className={styles.main_wrapper}>
        <Sidebar />
        {children}
      </main>
    </>
  );
}
