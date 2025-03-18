import { prisma } from '@/lib/db';

export const getTodosByTeamMemberId = async (teamMemberId: number) => {
  try {
    const todos = await prisma.todo.findMany({
      where: {
        team_member_id: teamMemberId,
      },
      include: {
        task_category: true,
        project: true,
      },
    });
    // チームメンバーがない場合は空文字を返す
    return todos ?? [];
  } catch (error) {
    console.error(error);
    throw new Error('todoの取得に失敗しました');
  }
};
