import React from 'react';
import styles from '@/app/(public)/team/[teamId]/mypage/mypage.module.scss';

const TodoItem = () => {
  return (
    <li className={styles.todo_item}>
      <label className={styles.todo_checkbox_label}>
        <input type="checkbox" />
        <svg viewBox="0 0 80 80" height="20px" width="20px">
          <path
            d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
            pathLength="575.0541381835938"
            className={styles.path}
          ></path>
        </svg>
      </label>
      <span className={styles.todo_text}>タスク名</span>
      <span className={styles.todo_category}>カテゴリー</span>
    </li>
  );
};

export default TodoItem;
