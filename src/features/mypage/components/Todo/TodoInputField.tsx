'use client';

import type { ProjectData } from '@/types/project';
import type { TaskCategoryData } from '@/types/taskCategory';
import type { ChangeEvent } from 'react';
import React, { useEffect, useRef } from 'react';
import styles from '@/app/(public)/team/[teamId]/mypage/mypage.module.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<CreateTodoData>({
    resolver: zodResolver(createTodoSchema),
    defaultValues: {
      todo_description: '',
      task_category_id: 1,
      project_id: null,
    },
  });

  // プロジェクトを選択した際にプロジェクトIDもセットする
  const selectedCategoryId = watch('task_category_id');
  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const categoryId = selectedOption.value;
    const projectId = selectedOption.getAttribute('id');

    setValue('task_category_id', Number(categoryId));
    if (selectedCategoryId === 1 && projectId) {
      setValue('project_id', Number(projectId));
    } else {
      setValue('project_id', null); // プロジェクトが不要な場合はリセット
    }
  };

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
        {/* TODO:選択されたのがプロジェクトの場合にプロジェクト名が表示されるようにする */}
        <select
          id="category"
          className={styles.todo_select_category}
          {...register('task_category_id')}
          onChange={handleCategoryChange}
        >
          {/* optionのバリューはカテゴリーIDを指定 */}
          {taskCategories &&
            taskCategories.length !== 0 &&
            taskCategories.map((taskItem) =>
              // タスクが「プロジェクト」の場合サブフィールドとしてプロジェクトを選択
              taskItem.task_category_name === 'プロジェクト' ? (
                <optgroup
                  key={taskItem.task_category_id}
                  label={taskItem.task_category_name}
                >
                  {projects &&
                    projects.length !== 0 &&
                    projects.map((projectItem) => (
                      <option
                        key={projectItem.project_id}
                        value={taskItem.task_category_id}
                        id={String(projectItem.project_id)}
                      >
                        {projectItem.project_name}
                      </option>
                    ))}
                </optgroup>
              ) : (
                <option
                  key={taskItem.task_category_id}
                  value={taskItem.task_category_id}
                >
                  {taskItem.task_category_name}
                </option>
              ),
            )}
        </select>
        <IconButton type="submit">
          <SendIcon className={styles.todo_add_button} />
        </IconButton>
      </form>
    </li>
  );
};

export default TodoInputField;
