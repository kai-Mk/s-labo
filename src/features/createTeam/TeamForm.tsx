'use client';

import React from 'react';
import styles from '@/app/(public)/team/create/createTeam.module.scss';
import InputField from '@/components/inputField/InputField';
import SendButton from '@/components/sendButton/SendButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const createTeamSchema = z.object({
  team_name: z.string().min(1, 'チーム名は必須です'),
  team_description: z.string().nullable(),
});

type createTeamData = z.infer<typeof createTeamSchema>;

const TeamForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createTeamData>({
    resolver: zodResolver(createTeamSchema),
  });

  const onSubmit = (data: createTeamData) => {
    //
  };
  return (
    <form
      action="post"
      className={styles.create_team_form}
      onSubmit={(e) => {
        e.preventDefault();
        void handleSubmit(onSubmit)(e);
      }}
    >
      <InputField
        htmlFor="team_name"
        label="チーム名"
        errorMessage={errors.team_name?.message}
      >
        <input
          type="text"
          id="team_name"
          className={`${styles.create_team_field} ${errors.team_name && styles.error_field}`}
          placeholder="チーム名を入力"
          autoComplete="off"
          {...register('team_name')}
        />
      </InputField>
      <InputField
        htmlFor="team_description"
        label="チーム名"
        errorMessage={errors.team_description?.message}
      >
        <textarea
          id="team_description"
          className={styles.create_team_textarea}
          placeholder="チームの説明を入力"
          {...register('team_description')}
        ></textarea>
      </InputField>
      <SendButton
        value="チームを作成"
        className={styles.create_team_send_button}
      />
    </form>
  );
};

export default TeamForm;
