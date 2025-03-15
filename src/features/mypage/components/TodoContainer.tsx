import React from 'react';
import styles from '@/app/(public)/team/[teamId]/mypage/mypage.module.scss';
import { getProjectsByTeamId } from '@/services/project/getProjectsByTeamId';
import { getTaskCategory } from '@/services/taskCategory/getTaskCategory';
import CreateIcon from '@mui/icons-material/CreateOutlined';
import { IconButton } from '@mui/material';
import TodoList from './Todo/TodoList';

interface TodoContainerProps {
  teamId: string;
}

const TodoContainer = async ({ teamId }: TodoContainerProps) => {
  const taskCategories = await getTaskCategory();
  const projectsByTeamId = await getProjectsByTeamId(teamId);
  return (
    <div className={styles.mypage_todo}>
      <h3 className={styles.mypage_todo_title}>todoリスト</h3>
      <TodoList taskCategories={taskCategories} projects={projectsByTeamId} />
      <div className={styles.mypage_todo_comment}>
        <div className={styles.comment_box_head}>
          <h4 className={styles.comment_box_title}>コメント</h4>
          <IconButton sx={{ width: '24px', height: '24px' }}>
            <CreateIcon sx={{ height: '16px', width: '16px' }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
