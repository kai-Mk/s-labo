'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
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
