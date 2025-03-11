import React from 'react';
import styles from './mypage.module.scss';

const MyPage = () => {
  return (
    <div className={styles.team_mypage}>
      {/* 退勤とtodo */}
      <div className={styles.team_mypage_left}>
        <div className={styles.mypage_todo}>todoリスト</div>
        <div className={styles.team_mypage_left_line} />
        <div className={styles.mypage_leaving_report}>退勤報告</div>
      </div>
      <div className={styles.team_mypage_center_line} />
      {/* タイムボクシング */}
      <div className={styles.team_mypage_right}>
        <div className={styles.mypage_time_boxing}>タイムボクシング</div>
      </div>
    </div>
  );
};

export default MyPage;
