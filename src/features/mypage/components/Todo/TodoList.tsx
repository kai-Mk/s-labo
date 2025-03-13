'use client';

import React, { useState } from 'react';
import styles from '@/app/(public)/team/[teamId]/mypage/mypage.module.scss';
import AddButton from './AddButton';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [isInputField, setIsInputField] = useState(false);
  return (
    <>
      <ul className={styles.mypage_todo_list}>
        {isInputField && <TodoItem />}
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
      <AddButton onClick={() => setIsInputField(!isInputField)} />
    </>
  );
};

export default TodoList;
