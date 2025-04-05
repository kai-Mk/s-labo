'use client';

import type { ProjectData } from '@/types/project';
import type { TaskCategoryData } from '@/types/taskCategory';
import type { EnrichTodo } from '@/types/todo';
import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import styles from '@/app/(public)/team/[teamId]/mypage/mypage.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import CategorySelectBox from './CategorySelectBox';

interface TodoUpdateFormProps {
  todoId: number;
  task: string;
  taskCategories: TaskCategoryData[];
  projects: ProjectData[];
  setEnrichedTodos: Dispatch<SetStateAction<EnrichTodo[]>>;
}

const TodoUpdateForm = ({
  todoId,
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

  // 選択されたフィールドの情報

  const handleCategoryChange = () => {
    // 処理を書きます
  };
  return (
    <>
      <IconButton sx={{ marginLeft: '15px' }} onClick={handleCloseUpdate}>
        <CloseIcon />
      </IconButton>
      <form action="post" className={styles.todo_form}>
        <input
          type="text"
          id="task"
          className={`${styles.todo_input}`}
          placeholder="タスクを入力"
          // {...register('todo_description')}
          // refとregisterを併用するための処理
          // ref={(e) => {
          //   register('todo_description').ref(e);
          //   inputRef.current = e;
          // }}
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
    </>
  );
};

export default TodoUpdateForm;
