import { z } from 'zod';

export const createTodoSchema = z.object({
  todo_description: z.string().min(1, 'タスク内容を入力してください'),
  // 文字列の数字できた場合にcoerceで自動で数値型に変更
  task_category_id: z.coerce.number(),
  project_id: z.coerce.number().nullable(),
});

export type CreateTodoData = z.infer<typeof createTodoSchema>;
