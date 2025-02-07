'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import InputField from '@/components/inputField/InputField';
import SendButton from '@/components/sendButton/SendButton';
import { apiClient } from '@/lib/apiClient';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import styles from './createTeam.module.scss';

const createTeamSchema = z.object({
  team_name: z.string().min(1, 'チーム名は必須です'),
  team_description: z.string().nullable(),
});

type createTeamData = z.infer<typeof createTeamSchema>;

const CreateTeam = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createTeamData>({
    resolver: zodResolver(createTeamSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: createTeamData) => {
    try {
      const response = await apiClient.post<createTeamData>('api/team', data);
      alert('チーム作成されました。');
      router.push('/');
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <div className={styles.createTeam_box}>
      <h2 className={styles.createTeam_title}>チームを追加</h2>
      <form
        action="post"
        className={styles.createTeam_form}
        onSubmit={(e) => {
          e.preventDefault();
          void handleSubmit(onSubmit)(e);
        }}
      >
        <InputField
          htmlFor="team_name"
          label="チーム名"
          required
          errorMessage={errors.team_name?.message}
        >
          <input
            type="text"
            id="team_name"
            className={`${styles.createTeam_field} ${errors.team_name && styles.error_field}`}
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
            className={styles.createTeam_textarea}
            placeholder="チームの説明を入力"
            {...register('team_description')}
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
