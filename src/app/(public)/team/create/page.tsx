import React from 'react';
import InputField from '@/components/inputField/InputField';
import styles from './createTeam.module.scss';

const CreateTeam = () => {
  return (
    <div className={styles.createTeam_box}>
      <h2 className={styles.createTeam_title}>チームを追加</h2>
      <InputField htmlFor="teamName" label="チーム名">
        <input
          type="email"
          id="email"
          className={styles.login_input_field}
          placeholder="チーム名を入力"
          autoComplete="off"
        />
      </InputField>
    </div>
  );
};

export default CreateTeam;
