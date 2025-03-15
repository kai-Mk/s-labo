'use client';

import React, { useEffect, useRef } from 'react';
import styles from '@/app/(public)/team/[teamId]/mypage/mypage.module.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const createTodoSchema = z.object({
  todo_description: z.string().min(1, 'タスク内容を入力してください'),
  task_category_id: z.coerce.number(),
});

type CreateTodoData = z.infer<typeof createTodoSchema>;

interface TodoInputFieldProps {
  isInputField: boolean;
}

const TodoInputField = ({ isInputField }: TodoInputFieldProps) => {
  // インプットフィールドにフォーカスさせる
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isInputField && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isInputField]);

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTodoData>({
    resolver: zodResolver(createTodoSchema),
    defaultValues: {
      todo_description: '',
      task_category_id: 1,
    },
  });

  const onSubmit = async (data: CreateTodoData) => {
    // TodoのAPI処理
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
        <select
          id="category"
          className={styles.todo_select_category}
          {...register('task_category_id')}
        >
          {/* optionのバリューはカテゴリーIDを指定 */}
          <option value={1}>デザイン</option>
          <option value={2}>コーディング</option>
          <option value={3}>その他</option>
        </select>
        <IconButton type="submit">
          <SendIcon className={styles.todo_add_button} />
        </IconButton>
      </form>
    </li>
  );
};

export default TodoInputField;
