import React from 'react';
import TeamForm from '@/features/createTeam/TeamForm';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../api/auth/[...nextauth]/route';
import styles from './createTeam.module.scss';

const CreateTeam = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className={styles.create_team_box}>
      <h2 className={styles.create_team_title}>チームを追加</h2>
      <TeamForm />
    </div>
  );
};

export default CreateTeam;
