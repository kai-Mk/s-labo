'use client';

import type { ProjectData } from '@/types/project';
import type { TaskCategoryData } from '@/types/taskCategory';
import type { Todo } from '@/types/todo';
import React, { useState } from 'react';
import styles from '@/app/(public)/team/[teamId]/mypage/mypage.module.scss';
import AddButton from './AddButton';
import TodoInputField from './TodoInputField';
import TodoItem from './TodoItem';

interface TodoListProps {
  taskCategories: TaskCategoryData[];
  projects: ProjectData[];
  todos: Todo[];
}

const TodoList = ({ taskCategories, projects, todos }: TodoListProps) => {
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
        {todos &&
          todos.length !== 0 &&
          todos.map((item) => (
            <TodoItem
              key={item.todo_id}
              task={item.todo_description}
              category={
                item.task_category_id === 1
                  ? item.project!.project_name
                  : item.task_category.task_category_name
              }
            />
          ))}
      </ul>
      <AddButton
        isInputField={isInputField}
        onClick={() => setIsInputField(!isInputField)}
      />
    </>
  );
};

export default TodoList;
