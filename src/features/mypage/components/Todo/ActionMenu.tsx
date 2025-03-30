'use client';

import type { EnrichTodo } from '@/types/todo';
import React from 'react';
import styles from '@/app/(public)/team/[teamId]/mypage/mypage.module.scss';
import ThreeBarIcon from '@mui/icons-material/Dehaze';
import { IconButton } from '@mui/material';
import { updateActionMenu } from '../../utils/updateActionMenu';

interface ActionMenuProps {
  setEnrichedTodos: React.Dispatch<React.SetStateAction<EnrichTodo[]>>;
  todoId: number;
  isActionMenu: boolean;
}

const ActionMenu = ({
  setEnrichedTodos,
  todoId,
  isActionMenu,
}: ActionMenuProps) => {
  // 三本バーを押した処理
  const handleActionMenu = () => {
    setEnrichedTodos((prevTodos) => updateActionMenu(prevTodos, todoId));
  };
  // 編集ボタン押した処理
  const handleUpdate = () => {
    // 処理
    setEnrichedTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.todo_id === todoId ? { ...todo, isUpdateField: true } : todo,
      ),
    );
  };
  return (
    <div className={styles.action_menu}>
      <IconButton onClick={() => handleActionMenu()}>
        <ThreeBarIcon className={styles.action_menu_button} />
      </IconButton>
      <ul
        className={`${styles.action_menu_list} ${isActionMenu ? styles.active : ''}`}
      >
        <li className={styles.action_menu_item} onClick={() => handleUpdate()}>
          編集
        </li>
        <li className={`${styles.action_menu_item} ${styles.delete}`}>削除</li>
      </ul>
    </div>
  );
};

export default ActionMenu;
