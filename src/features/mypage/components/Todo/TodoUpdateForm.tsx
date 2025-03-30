import type { ProjectData } from '@/types/project';
import type { TaskCategoryData } from '@/types/taskCategory';
import React from 'react';
import styles from '@/app/(public)/team/[teamId]/mypage/mypage.module.scss';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import CategorySelectBox from './CategorySelectBox';

interface TodoUpdateFormProps {
  taskCategories: TaskCategoryData[];
  projects: ProjectData[];
}

const TodoUpdateForm = ({ taskCategories, projects }: TodoUpdateFormProps) => {
  const handleCategoryChange = () => {
    // 処理を書きます
  };
  return (
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
  );
};

export default TodoUpdateForm;
