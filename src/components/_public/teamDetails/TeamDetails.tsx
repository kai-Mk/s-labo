import React from 'react';
import styles from './teamDetails.module.scss';

const TeamDetails = ({ children }: { children: React.ReactNode }) => {
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
        <div className={styles.team_project_box}>{children}</div>
      </div>
    </div>
  );
};

export default TeamDetails;
