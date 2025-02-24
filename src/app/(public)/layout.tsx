import React from 'react';
import Header from '@/components/_layout/header/Header';
import Sidebar from '@/components/_public/sidebar/Sidebar';
import TeamDetails from '@/components/_public/teamDetails/TeamDetails';
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
        <TeamDetails>{children}</TeamDetails>
      </main>
    </>
  );
}
