import React from 'react';
import InputField from '@/components/inputField/InputField';
import SendButton from '@/components/sendButton/SendButton';
import styles from './createTeam.module.scss';

const CreateTeam = () => {
  return (
    <div className={styles.createTeam_box}>
      <h2 className={styles.createTeam_title}>チームを追加</h2>
      <form action="post" className={styles.createTeam_form}>
        <InputField htmlFor="team_name" label="チーム名" required>
          <input
            type="text"
            id="team_name"
            className={styles.createTeam_field}
            placeholder="チーム名を入力"
            autoComplete="off"
          />
        </InputField>
        <InputField htmlFor="team_description" label="チーム名">
          <textarea
            id="team_description"
            className={styles.createTeam_textarea}
            placeholder="チームの説明を入力"
          ></textarea>
        </InputField>
        <SendButton
          value="チームを作成"
          className={styles.createTeam_send_button}
        />
      </form>
    </div>
  );
};

export default CreateTeam;
