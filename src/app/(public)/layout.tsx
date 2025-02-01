'use client';

import Header from '@/components/_layout/header/Header';
import Sidebar from '@/components/_public/sideber/Sidebar';
import TeamContent from '@/components/_public/teamContent/TeamContent';
import { SessionProvider } from 'next-auth/react';
import styles from './public.module.scss';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <Header />
      <main className={styles.main_wrapper}>
        <Sidebar />
        <TeamContent>{children}</TeamContent>
      </main>
    </SessionProvider>
  );
}
