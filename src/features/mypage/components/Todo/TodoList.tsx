'use client';

import type { ProjectData } from '@/types/project';
import type { TaskCategoryData } from '@/types/taskCategory';
import type { EnrichTodo, Todo } from '@/types/todo';
import React, { useState } from 'react';
import styles from '@/app/(public)/team/[teamId]/mypage/mypage.module.scss';
import { enrichTodos } from '../../utils/enrichTodos';
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
  const [enrichedTodos, setEnrichedTodos] = useState<EnrichTodo[]>(
    enrichTodos(todos),
  );

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
        {enrichedTodos &&
          enrichedTodos.length !== 0 &&
          enrichedTodos.map((item) => (
            <TodoItem
              key={item.todo_id}
              todoId={item.todo_id}
              isUpdateField={item.isUpdateField}
              isActionMenu={item.isActionMenu}
              taskCategories={taskCategories}
              projects={projects}
              task={item.todo_description}
              category={
                item.task_category_id === 1
                  ? item.project!.project_name
                  : item.task_category.task_category_name
              }
              setEnrichedTodos={setEnrichedTodos}
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
