import { prisma } from '@/lib/db';

export const getTeamMembersById = async (userId: string) => {
  try {
    const teamMembers = await prisma.teamMember.findMany({
      where: { user_id: Number(userId) },
      include: {
        team: true,
        role: true,
        user: {
          select: {
            user_id: true,
            user_name: true,
            email: true,
            family_name: true,
            given_name: true,
            created_at: true,
            updated_at: true,
            deleted_at: true,
          },
        },
      },
    });

    // チームメンバーがない場合は空文字を返す
    return teamMembers ?? [];
  } catch (error) {
    console.error(error);
    throw new Error('チームメンバーの取得に失敗しました');
  }
};
