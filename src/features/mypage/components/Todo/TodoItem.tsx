'use client';

import type { ProjectData } from '@/types/project';
import type { TaskCategoryData } from '@/types/taskCategory';
import type { EnrichTodo } from '@/types/todo';
import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import styles from '@/app/(public)/team/[teamId]/mypage/mypage.module.scss';
import ActionMenu from './ActionMenu';
import TodoUpdateForm from './TodoUpdateForm';

interface TodoItemProps {
  todoId: number;
  categoryId: number;
  projectId: number | null;
  isUpdateField: boolean;
  isActionMenu: boolean;
  taskCategories: TaskCategoryData[];
  projects: ProjectData[];
  task: string;
  category: string;
  setEnrichedTodos: Dispatch<SetStateAction<EnrichTodo[]>>;
}

const TodoItem = ({
  todoId,
  categoryId,
  projectId,
  isUpdateField,
  isActionMenu,
  taskCategories,
  projects,
  task,
  category,
  setEnrichedTodos,
}: TodoItemProps) => {
  return (
    <>
      {isUpdateField ? (
        <li className={styles.todo_update_field}>
          <TodoUpdateForm
            todoId={todoId}
            categoryId={categoryId}
            projectId={projectId}
            category={category}
            task={task}
            taskCategories={taskCategories}
            projects={projects}
            setEnrichedTodos={setEnrichedTodos}
          />
        </li>
      ) : (
        <li className={styles.todo_item}>
          {/**
           * //todoここにチェックを入れたらデータベースにcheckedの値を入れないといけない
           */}
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
          <span className={styles.todo_text}>{task}</span>
          <span className={styles.todo_category}>{category}</span>
          <ActionMenu
            setEnrichedTodos={setEnrichedTodos}
            todoId={todoId}
            isActionMenu={isActionMenu}
            task={task}
          />
        </li>
      )}
    </>
  );
};

export default TodoItem;
