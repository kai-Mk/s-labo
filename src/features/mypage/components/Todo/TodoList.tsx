'use client';

import React, { useState } from 'react';
import styles from '@/app/(public)/team/[teamId]/mypage/mypage.module.scss';
import AddButton from './AddButton';
import TodoInputField from './TodoInputField';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [isInputField, setIsInputField] = useState(false);
  return (
    <>
      <ul
        className={`${styles.mypage_todo_list} ${isInputField ? styles.adding : ''}`}
      >
        <TodoInputField isInputField={isInputField} />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
      <AddButton
        isInputField={isInputField}
        onClick={() => setIsInputField(!isInputField)}
      />
    </>
  );
};

export default TodoList;
