import type { EnrichTodo } from '@/types/todo';

/**
 * isActionMenuの状態を更新する関数
 * 既に開いているメニューは閉じる
 * 指定されたメニューは開く
 * @param todos 編集したtodoの配列
 * @param todoId 選択されたtodoのID
 *
 */
export const updateActionMenu = (todos: EnrichTodo[], todoId: number) => {
  return todos.map((todo) => {
    if (todo.isActionMenu && todo.todo_id !== todoId) {
      return { ...todo, isActionMenu: false };
    }

    if (todo.todo_id === todoId) {
      return { ...todo, isActionMenu: !todo.isActionMenu };
    }

    return todo;
  });
};
