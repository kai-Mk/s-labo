'use client';

import type { TeamMemberData } from '@/types/teamMember';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ArrowIcon from '@mui/icons-material/ArrowForwardIos';
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
        <NavButton path={`/team/${selectTeamId}`} label="共有スペース" />
        <NavButton path={`/team/${selectTeamId}/mypage`} label="マイページ" />
      </ul>
    </div>
  );
};

export default TeamProjectNav;
