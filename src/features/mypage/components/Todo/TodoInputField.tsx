'use client';

import type { ProjectData } from '@/types/project';
import type { TaskCategoryData } from '@/types/taskCategory';
import type { ChangeEvent } from 'react';
import React, { useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import styles from '@/app/(public)/team/[teamId]/mypage/mypage.module.scss';
import { apiClient } from '@/lib/apiClient';
import { zodResolver } from '@hookform/resolvers/zod';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import { isAxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import CategorySelectBox from './CategorySelectBox';

const createTodoSchema = z.object({
  todo_description: z.string().min(1, 'タスク内容を入力してください'),
  // 文字列の数字できた場合にcoerceで自動で数値型に変更
  task_category_id: z.coerce.number(),
  project_id: z.coerce.number().nullable(),
});

type CreateTodoData = z.infer<typeof createTodoSchema>;

// プロップスの型定義
interface TodoInputFieldProps {
  isInputField: boolean;
  taskCategories: TaskCategoryData[];
  projects: ProjectData[];
}

// todo入力時のレスポンスのデータ型
interface CreateTodoResponse extends CreateTodoData {
  team_id: number;
  todo_date: Date;
}

const TodoInputField = ({
  isInputField,
  taskCategories,
  projects,
}: TodoInputFieldProps) => {
  // 「タスクを追加する」を押したらインプットフィールドにフォーカスさせる
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isInputField && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isInputField]);

  // react-hook-form
  const FIRST_PROJECT_ID = projects[0]?.project_id;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<CreateTodoData>({
    resolver: zodResolver(createTodoSchema),
    defaultValues: {
      todo_description: '',
      task_category_id: 1,
      project_id: FIRST_PROJECT_ID,
    },
  });

  // プロジェクトを選択した際にプロジェクトIDもセットする
  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.options[e.target.selectedIndex];
    const categoryId = Number(option.getAttribute('data-category-id'));
    const projectId = option.hasAttribute('data-project-id')
      ? Number(option.getAttribute('data-project-id'))
      : null;

    setValue('task_category_id', Number(categoryId));
    setValue('project_id', projectId);
  };

  const { teamId } = useParams();
  const onSubmit = async (data: CreateTodoData) => {
    // TodoのAPI処理
    try {
      const response = await apiClient.post<CreateTodoResponse>('api/todo', {
        ...data,
        team_id: Number(teamId),
        todo_date: new Date().toISOString(),
      });
      alert('todoを作成しました');
      return response.data;
    } catch (error) {
      console.error(error);
      if (isAxiosError(error)) {
        const { data } = error.response as { data: { error: string } };
        alert(data.error);
      }
    }
  };

  return (
    <li
      className={`${styles.todo_input_field} ${isInputField && styles.adding}`}
    >
      <form
        action="post"
        className={styles.todo_form}
        onSubmit={(e) => {
          e.preventDefault();
          void handleSubmit(onSubmit)(e);
        }}
      >
        <input
          type="text"
          id="task"
          className={styles.todo_input}
          placeholder="タスクを入力"
          {...register('todo_description')}
          // refとregisterを併用するための処理
          ref={(e) => {
            register('todo_description').ref(e);
            inputRef.current = e;
          }}
        />
        <CategorySelectBox
          onChange={handleCategoryChange}
          taskCategories={taskCategories}
          projects={projects}
        />
        <IconButton type="submit">
          <SendIcon className={styles.todo_add_button} />
        </IconButton>
      </form>
    </li>
  );
};

export default TodoInputField;
