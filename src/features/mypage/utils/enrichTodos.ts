import type { EnrichTodo, Todo } from '@/types/todo';

export const enrichTodos = (todos: Todo[]): EnrichTodo[] => {
  return todos.map((todo) => ({
    ...todo,
    isActionMenu: false,
    isUpdateField: false,
  }));
};
