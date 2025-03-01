import { NextResponse } from 'next/server';
import { getTeamMembersById } from '@/services/teamMember/getTeamMembersById';

export const GET = async (
  req: Request,
  { params }: { params: { id: string } },
) => {
  try {
    const { id } = params;
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
