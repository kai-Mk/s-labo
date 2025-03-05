import React from 'react';
import styles from './teamTop.module.scss';

const TeamTop = () => {
  return (
    <div className={styles.team_top}>
      <div className={styles.team_top_project}>
        <div className={styles.project_head}>
          <h3 className={styles.head_title}>プロジェクト</h3>
          <button className={styles.head_add_button}>追加</button>
          <input type="text" className={styles.head_input} />
        </div>
      </div>
      <div className={styles.team_top_center_line} />
      <div className={styles.team_top_info}>
        <div className={styles.info_head}>
          <h3 className={styles.head_title}>お知らせ</h3>
          <button className={styles.head_add_button}>追加</button>
          <input type="text" className={styles.head_input} />
        </div>
      </div>
    </div>
  );
};

export default TeamTop;
