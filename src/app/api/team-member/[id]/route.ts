import { NextResponse } from 'next/server';
import { getTeamMembersById } from '@/services/teamMember/getTeamMembersById';

export const GET = async (
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) => {
  try {
    const { id } = await params;
    const teamMembers = await getTeamMembersById(id);

    return NextResponse.json(teamMembers);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'チームメンバー取得時のAPIエラー' },
      { status: 500 },
    );
  }
};
