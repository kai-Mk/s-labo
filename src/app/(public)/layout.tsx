import React from 'react';
import Header from '@/components/_layout/header/Header';
import Sidebar from '@/components/_public/sidebar/Sidebar';
import TeamDetails from '@/components/_public/teamDetails/TeamDetails';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import styles from './public.module.scss';

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id ?? null;

  return (
    <>
      <Header />
      <main className={styles.main_wrapper}>
        <Sidebar />
        <TeamDetails userId={userId}>{children}</TeamDetails>
      </main>
    </>
  );
}
