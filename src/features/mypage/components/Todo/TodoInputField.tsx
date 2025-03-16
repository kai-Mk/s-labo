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
  category_name: z.string(),
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
  const FIRST_PROJECT_NAME = projects[0].project_name;
  const FIRST_PROJECT_ID = projects[0].project_id;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<CreateTodoData>({
    resolver: zodResolver(createTodoSchema),
    defaultValues: {
      todo_description: '',
      category_name: FIRST_PROJECT_NAME,
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
          {...register('category_name')}
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
                        value={projectItem.project_name}
                        data-category-id={taskItem.task_category_id}
                        data-project-id={projectItem.project_id}
                      >
                        {projectItem.project_name}
                      </option>
                    ))}
                </optgroup>
              ) : (
                <option
                  key={taskItem.task_category_id}
                  value={taskItem.task_category_name}
                  data-category-id={taskItem.task_category_id}
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
