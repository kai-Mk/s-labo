'use client';

import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useTeamMember } from '@/hooks/teamMember/useTeamMember';
import AddTeamButton from './AddTeamButton';
import styles from './teamDetails.module.scss';

interface TeamProjectBoxProps {
  children: React.ReactNode;
  userId: string | null;
}

const TeamProjectBox = ({ children, userId }: TeamProjectBoxProps) => {
  const pathname = usePathname();
  const teamMemberData = useTeamMember(userId);
  const router = useRouter();

  // チームが存在する場合は最初のチームのページにリダイレクト
  useEffect(() => {
    if (teamMemberData && teamMemberData.length > 0 && pathname === '/') {
      const firstTeamId = teamMemberData[0].team.team_id;
      router.push(`/team/${firstTeamId}`);
    }
  }, [teamMemberData, router, pathname]);

  return (
    <div className={styles.team_project_box}>
      {teamMemberData && teamMemberData.length === 0 && pathname === '/' ? (
        <AddTeamButton />
      ) : (
        children
      )}
    </div>
  );
};

export default TeamProjectBox;
