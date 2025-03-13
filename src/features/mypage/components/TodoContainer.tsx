import React from 'react';
import Link from 'next/link';
import styles from '@/app/(public)/team/[teamId]/mypage/mypage.module.scss';
import AddIcon from '@mui/icons-material/AddCircleOutlineRounded';
import CreateIcon from '@mui/icons-material/CreateOutlined';
import { IconButton } from '@mui/material';
import AddButton from './Todo/AddButton';
import TodoItem from './Todo/TodoItem';
import TodoList from './Todo/TodoList';

const TodoContainer = () => {
  return (
    <div className={styles.mypage_todo}>
      <h3 className={styles.mypage_todo_title}>todoリスト</h3>
      <TodoList />
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
