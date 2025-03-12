import React from 'react';
import styles from '@/app/(public)/team/[teamId]/mypage/mypage.module.scss';
import AddIcon from '@mui/icons-material/AddCircleOutlineRounded';
import AddButton from './Todo/AddButton';
import TodoItem from './Todo/TodoItem';

const TodoContainer = () => {
  return (
    <div className={styles.mypage_todo}>
      <h3 className={styles.mypage_todo_title}>todoリスト</h3>
      <ul className={styles.mypage_todo_list}>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
      <AddButton />
    </div>
  );
};

export default TodoContainer;
