import React from 'react';
import { getTeamMembersById } from '@/services/teamMember/getTeamMembersById';
import styles from './teamDetails.module.scss';
import TeamProjectBox from './TeamProjectBox';

interface TeamDetailsProps {
  children: React.ReactNode;
  userId: string | null;
}

const TeamDetails = async ({ children, userId }: TeamDetailsProps) => {
  const teamMemberData = await getTeamMembersById(userId);

  return (
    <div className={styles.team_project_container}>
      <div className={styles.team_project_left_bar}>
        <h2 className={styles.team_name}>チーム名</h2>
        <ul className={styles.left_bar_list}>
          <li>
            <button>共有スペース</button>
          </li>
          <li>
            <button>マイページ</button>
          </li>
        </ul>
      </div>
      {/* チーム内の詳細画面 */}
      <div className={styles.team_project_content}>
        <TeamProjectBox teamMemberData={teamMemberData}>
          {children}
        </TeamProjectBox>
      </div>
    </div>
  );
};

export default TeamDetails;
