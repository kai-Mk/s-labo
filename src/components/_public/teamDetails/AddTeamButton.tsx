import React from 'react';
import Link from 'next/link';
import styles from './teamDetails.module.scss';

const AddTeamButton = () => {
  return (
    <div className={styles.add_team_container}>
      <Link href="/team/create" className={styles.add_team_link}>
        チームを作成する
      </Link>
    </div>
  );
};

export default AddTeamButton;
