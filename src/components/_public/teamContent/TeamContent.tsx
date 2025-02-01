'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTeamMemberData } from '@/hooks/teamMember/useTeamMemberData';
import { apiClient } from '@/lib/apiClient';
import { useSession } from 'next-auth/react';
import AddTeamButton from './AddTeamButton';
import styles from './teamContent.module.scss';

interface TeamContentProps {
  children: React.ReactNode;
}

const TeamContent = ({ children }: TeamContentProps) => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const userId = session?.user?.id;
  const { data, isLoading, error } = useTeamMemberData(
    status === 'authenticated' ? userId : undefined,
  );

  return (
    <div className={styles.team_project_container}>
      <div className={styles.team_project_select_bar}>
        <h2 className={styles.team_name}>チーム名</h2>
      </div>
      <div className={styles.team_project_content}>
        <div className={styles.team_project_box}>
          {data.length === 0 && pathname === '/' ? <AddTeamButton /> : children}
        </div>
      </div>
    </div>
  );
};

export default TeamContent;
