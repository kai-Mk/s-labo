import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export const GET = async (
  req: Request,
  context: { params: Promise<{ id: string }> },
) => {
  const { id } = await context.params;
  const teamMember = await prisma.teamMember.findMany({
    where: { user_id: Number(id) },
  });
  if (!teamMember)
    return NextResponse.json({ error: 'チームがありません' }, { status: 404 });
  return NextResponse.json(teamMember);
};
