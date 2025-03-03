import React from 'react';
import { getTeamMembersById } from '@/services/teamMember/getTeamMembersById';
import styles from './teamDetails.module.scss';
import TeamProjectBox from './TeamProjectBox';
import TeamProjectNav from './TeamProjectNav';

interface TeamDetailsProps {
  children: React.ReactNode;
  userId: string | null;
}

const TeamDetails = async ({ children, userId }: TeamDetailsProps) => {
  const teamMemberData = await getTeamMembersById(userId);
  return (
    <div className={styles.team_project_container}>
      {/* チームのナビゲーション */}
      <TeamProjectNav teamMemberData={teamMemberData} />
      {/* チーム内の詳細画面 */}
      <div className={styles.team_project_content}>
        <TeamProjectBox userId={userId}>{children}</TeamProjectBox>
      </div>
    </div>
  );
};

export default TeamDetails;
