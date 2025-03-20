import React from 'react';
import TimeBoxContainer from '@/features/mypage/components/TimeBoxContainer';
import TodoContainer from '@/features/mypage/components/TodoContainer';
import { currentTeamMember } from '@/lib/currentTeamMember';
import { getTodosByTeamMemberId } from '@/services/todo/getTodosByTeamMemberId';
import styles from './mypage.module.scss';

const MyPage = async ({ params }: { params: Promise<{ teamId: string }> }) => {
  // チームメンバーIDからtodoリストを取得
  const { teamId } = await params;
  const teamMember = await currentTeamMember(Number(teamId));
  const teamMemberId = teamMember!.team_member_id;
  const todosByTeamMemberId = await getTodosByTeamMemberId(teamMemberId);
  return (
    <div className={styles.team_mypage}>
      {/* todo */}
      <div className={styles.team_mypage_left}>
        <TodoContainer teamId={teamId} todos={todosByTeamMemberId} />
      </div>
      <div className={styles.team_mypage_center_line} />
      {/* タイムボクシング */}
      <div className={styles.team_mypage_right}>
        <TimeBoxContainer />
      </div>
    </div>
  );
};

export default MyPage;
