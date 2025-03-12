import React from 'react';
import LeavingReportContainer from '@/features/mypage/components/LeavingReportContainer';
import TimeBoxContainer from '@/features/mypage/components/TimeBoxContainer';
import TodoContainer from '@/features/mypage/components/TodoContainer';
import styles from './mypage.module.scss';

const MyPage = () => {
  return (
    <div className={styles.team_mypage}>
      {/* 退勤とtodo */}
      <div className={styles.team_mypage_left}>
        <TodoContainer />
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
