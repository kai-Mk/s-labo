import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

interface requestBody {
  team_name: string;
  team_description: string;
}

export const POST = async (req: NextRequest) => {
  try {
    // 認証情報取得
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'ログインしてください' },
        { status: 401 },
      );
    }

    const userId = session.user.id;

    const body = (await req.json()) as requestBody;
    const { team_name, team_description }: requestBody = body;
    const description = team_description === '' ? null : team_description;

    // チームと作成者のチームメンバーデータを作成
    const ADMIN_ROLE_ID = 1;
    const result = await prisma.$transaction(async (prisma) => {
      const newTeam = await prisma.team.create({
        data: {
          team_name,
          team_description: description,
          owner_id: Number(userId),
        },
      });

      const newMember = await prisma.teamMember.create({
        data: {
          user_id: Number(userId),
          team_id: newTeam.team_id,
          role_id: ADMIN_ROLE_ID,
        },
      });

      return { newTeam, newMember };
    });

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error('エラー:', error);
    return NextResponse.json(
      { error: 'チームの作成に失敗しました' },
      { status: 500 },
    );
  }
};
