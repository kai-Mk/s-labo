'use client';

import type { TeamMemberData } from '@/types/teamMember';
import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import AddTeamButton from './AddTeamButton';
import styles from './teamDetails.module.scss';

interface TeamProjectBoxProps {
  teamMemberData: TeamMemberData[];
  children: React.ReactNode;
}

const TeamProjectBox = ({ teamMemberData, children }: TeamProjectBoxProps) => {
  const pathname = usePathname();

  // TODO: clientコンポーネント用にteamMemberDataを呼び出すapi(app/api)を作成する必要がある。
  return (
    <div className={styles.team_project_box}>
      {teamMemberData.length === 0 && pathname === '/' ? (
        <AddTeamButton />
      ) : (
        children
      )}
    </div>
  );
};

export default TeamProjectBox;
