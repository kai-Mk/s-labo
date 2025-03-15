import React from 'react';
import styles from '@/app/(public)/team/[teamId]/mypage/mypage.module.scss';
import AddTaskIcon from '@mui/icons-material/AddTask';

interface TodoInputFieldProps {
  isInputField: boolean;
}

const TodoInputField = ({ isInputField }: TodoInputFieldProps) => {
  return (
    <li
      className={`${styles.todo_input_field} ${isInputField && styles.adding}`}
    >
      <div className={styles.todo_checkbox_space}></div>
      <span className={styles.todo_text}>タスク名</span>
      <span className={styles.todo_category}>カテゴリー</span>
      <AddTaskIcon className={styles.todo_add_button} />
    </li>
  );
};

export default TodoInputField;
