'use client';

import type { ProjectData } from '@/types/project';
import type { TaskCategoryData } from '@/types/taskCategory';
import type { EnrichTodo } from '@/types/todo';
import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import React from 'react';
import styles from '@/app/(public)/team/[teamId]/mypage/mypage.module.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import { useForm } from 'react-hook-form';
import type { CreateTodoData } from '../../schemas/todo.schema';
import { createTodoSchema } from '../../schemas/todo.schema';
import { parseCategoryOption } from '../../utils/parseCategoryOption';
import CategorySelectBox from './CategorySelectBox';

interface TodoUpdateFormProps {
  todoId: number;
  categoryId: number;
  projectId: number | null;
  category: string;
  task: string;
  taskCategories: TaskCategoryData[];
  projects: ProjectData[];
  setEnrichedTodos: Dispatch<SetStateAction<EnrichTodo[]>>;
}

const TodoUpdateForm = ({
  todoId,
  categoryId,
  projectId,
  category,
  task,
  taskCategories,
  projects,
  setEnrichedTodos,
}: TodoUpdateFormProps) => {
  // 更新フィールドを終了する処理
  const handleCloseUpdate = () => {
    setEnrichedTodos((prev) =>
      prev.map((todo) =>
        todo.todo_id === todoId ? { ...todo, isUpdateField: false } : todo,
      ),
    );
  };

  // react-hook-form関連
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<CreateTodoData>({
    resolver: zodResolver(createTodoSchema),
    defaultValues: {
      todo_description: task,
      task_category_id: categoryId,
      project_id: projectId,
    },
  });

  // プロジェクトを選択した際にカテゴリーIDとプロジェクトIDをセットする処理
  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { categoryId, projectId } = parseCategoryOption(e);

    setValue('task_category_id', Number(categoryId));
    setValue('project_id', projectId);
  };

  // 更新ボタン（紙飛行機アイコン）を押したときの処理
  const onUpdate = async (data: CreateTodoData) => {
    // apiのPOST処理
  };

  return (
    <>
      <IconButton sx={{ marginLeft: '15px' }} onClick={handleCloseUpdate}>
        <CloseIcon />
      </IconButton>
      <form
        action="post"
        className={styles.todo_form}
        onSubmit={(e) => {
          e.preventDefault();
          void handleSubmit(onUpdate)(e);
        }}
      >
        <input
          type="text"
          id="task"
          className={`${styles.todo_input}`}
          placeholder="タスクを入力"
          {...register('todo_description')}
        />
        <CategorySelectBox
          onChange={handleCategoryChange}
          taskCategories={taskCategories}
          projects={projects}
          category={category}
        />
        <IconButton type="submit">
          <SendIcon className={styles.todo_add_button} />
        </IconButton>
      </form>
    </>
  );
};

export default TodoUpdateForm;
