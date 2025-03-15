import React from 'react';
import TimeBoxContainer from '@/features/mypage/components/TimeBoxContainer';
import TodoContainer from '@/features/mypage/components/TodoContainer';
import styles from './mypage.module.scss';

const MyPage = async ({ params }: { params: Promise<{ teamId: string }> }) => {
  const { teamId } = await params;
  return (
    <div className={styles.team_mypage}>
      {/* todo */}
      <div className={styles.team_mypage_left}>
        <TodoContainer teamId={teamId} />
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
