'use client';

import type { ProjectData } from '@/types/project';
import type { TaskCategoryData } from '@/types/taskCategory';
import React, { useState } from 'react';
import styles from '@/app/(public)/team/[teamId]/mypage/mypage.module.scss';
import AddButton from './AddButton';
import TodoInputField from './TodoInputField';
import TodoItem from './TodoItem';

interface TodoListProps {
  taskCategories: TaskCategoryData[];
  projects: ProjectData[];
}

const TodoList = ({ taskCategories, projects }: TodoListProps) => {
  const [isInputField, setIsInputField] = useState(false);
  return (
    <>
      <ul
        className={`${styles.mypage_todo_list} ${isInputField ? styles.adding : ''}`}
      >
        <TodoInputField
          isInputField={isInputField}
          taskCategories={taskCategories}
          projects={projects}
        />
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
