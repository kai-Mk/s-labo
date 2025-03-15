import { prisma } from '@/lib/db';

export const getProjectsByTeamId = async (teamId: string) => {
  try {
    const projects = await prisma.project.findMany({
      where: { team_id: Number(teamId) },
    });

    // プロジェクトがない場合は空文字を返す
    return projects ?? [];
  } catch (error) {
    console.error(error);
    throw new Error('プロジェクトの取得に失敗しました');
  }
};
