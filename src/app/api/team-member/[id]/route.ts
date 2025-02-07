import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export const GET = async (
  req: Request,
  context: { params: Promise<{ id: string }> },
) => {
  try {
    const { id } = await context.params;

    const teamMember = await prisma.teamMember.findMany({
      where: { user_id: Number(id) },
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

    if (!teamMember || teamMember.length === 0) {
      return NextResponse.json(
        { error: 'チームがありません' },
        { status: 404 },
      );
    }

    return NextResponse.json(teamMember);
  } catch (error) {
    console.error('エラー:', error);
    return NextResponse.json({ error: 'サーバーエラー' }, { status: 500 });
  }
};
