'use client';

import type { EnrichTodo } from '@/types/todo';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/app/(public)/team/[teamId]/mypage/mypage.module.scss';
import { apiClient } from '@/lib/apiClient';
import ThreeBarIcon from '@mui/icons-material/Dehaze';
import { IconButton } from '@mui/material';
import { isAxiosError } from 'axios';
import { updateActionMenu } from '../../utils/updateActionMenu';

interface ActionMenuProps {
  setEnrichedTodos: React.Dispatch<React.SetStateAction<EnrichTodo[]>>;
  todoId: number;
  isActionMenu: boolean;
  task: string;
}

const ActionMenu = ({
  setEnrichedTodos,
  todoId,
  isActionMenu,
  task,
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
        todo.todo_id === todoId
          ? { ...todo, isUpdateField: true, isActionMenu: false }
          : todo,
      ),
    );
  };

  // 削除ボタンを押したときの処理
  const router = useRouter();
  const handleDelete = async () => {
    //Todo処理を書く
    const isTodoDelete = window.confirm(`「${task}」を削除しますか？`);
    if (isTodoDelete) {
      try {
        await apiClient.delete(`/api/todo/${todoId}`);
        router.refresh();
        return true;
      } catch (error) {
        console.error(error);
        if (isAxiosError(error)) {
          const { data } = error.response as { data: { error: string } };
          alert(data.error);
        }
      }
    }
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
        <li
          className={`${styles.action_menu_item} ${styles.delete}`}
          onClick={(e) => {
            e.preventDefault();
            void handleDelete();
          }}
        >
          削除
        </li>
      </ul>
    </div>
  );
};

export default ActionMenu;
