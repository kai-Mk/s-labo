import { prisma } from '@/lib/db';

export const getTaskCategory = async () => {
  try {
    const taskCategories = await prisma.taskCategory.findMany();

    // taskCategoriesがない時は空配列を返す
    return taskCategories ?? [];
  } catch (error) {
    console.error(error);
    throw new Error('タスクカテゴリーの取得に失敗しました');
  }
};
