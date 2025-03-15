'use client';

import React, { useEffect, useRef } from 'react';
import styles from '@/app/(public)/team/[teamId]/mypage/mypage.module.scss';
import AddTaskIcon from '@mui/icons-material/AddTask';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';

interface TodoInputFieldProps {
  isInputField: boolean;
}

const TodoInputField = ({ isInputField }: TodoInputFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isInputField && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isInputField]);
  return (
    <li
      className={`${styles.todo_input_field} ${isInputField && styles.adding}`}
    >
      <form action="" className={styles.todo_form}>
        <input
          type="text"
          name=""
          id="task"
          className={styles.todo_input}
          placeholder="タスクを入力"
          ref={inputRef}
        />
        <select name="" id="category" className={styles.todo_select_category}>
          <option value="design">デザイン</option>
          <option value="cording">コーディング</option>
          <option value="other">その他</option>
        </select>
        <IconButton>
          <SendIcon className={styles.todo_add_button} />
        </IconButton>
      </form>
    </li>
  );
};

export default TodoInputField;
