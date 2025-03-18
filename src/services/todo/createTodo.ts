import { prisma } from '@/lib/db';

interface CreateTodoData {
  todo_description: string;
  task_category_id: number;
  project_id: number | null;
  todo_checked: boolean;
  team_member_id: number;
  todo_date: Date;
}

export const createTodo = async (data: CreateTodoData) => {
  const newTodo = await prisma.todo.create({
    data: {
      todo_description: data.todo_description,
      task_category_id: data.task_category_id,
      project_id: data.project_id,
      todo_checked: data.todo_checked,
      team_member_id: data.team_member_id,
      todo_date: data.todo_date,
    },
  });

  return newTodo;
};
