'use client';

import type { TeamMemberData } from '@/types/teamMember';
import React from 'react';
import { usePathname } from 'next/navigation';
import NavButton from './NavButton';
import styles from './teamDetails.module.scss';

interface TeamProjectNavProps {
  teamMemberData: TeamMemberData[];
}

const TeamProjectNav = ({ teamMemberData }: TeamProjectNavProps) => {
  // URLのパスパラメータからチーム情報を取得
  const pathName = usePathname();
  const selectTeamId = Number(pathName.split('/')[2]);
  const teamMemberDataByTeamId = teamMemberData.find(
    (item) => item.team.team_id === selectTeamId,
  );

  return (
    <div className={styles.team_project_left_bar}>
      <h2 className={styles.team_name}>
        {teamMemberDataByTeamId?.team.team_name}
      </h2>
      <ul className={styles.left_bar_list}>
        {!pathName.includes('create') ? (
          <>
            <NavButton path={`/team/${selectTeamId}`} label="共有スペース" />
            <NavButton
              path={`/team/${selectTeamId}/mypage`}
              label="マイページ"
            />
          </>
        ) : null}
      </ul>
    </div>
  );
};

export default TeamProjectNav;
