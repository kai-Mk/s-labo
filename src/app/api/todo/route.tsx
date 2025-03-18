import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { currentTeamMember } from '@/lib/currentTeamMember';
import { createTodo } from '@/services/todo/createTodo';

interface TodoRequestBody {
  todo_description: string;
  task_category_id: number;
  project_id: number;
  team_id: number;
  todo_date: Date;
}

export const POST = async (req: NextRequest) => {
  try {
    // リクエストボディの取得
    const {
      todo_description,
      task_category_id,
      project_id,
      team_id,
      todo_date,
    }: TodoRequestBody = (await req.json()) as TodoRequestBody;

    // チームメンバーIDを取得
    const teamMembers = await currentTeamMember(team_id);
    const teamMemberId: number = teamMembers!.team_member_id;

    const result = await createTodo({
      todo_description,
      task_category_id,
      project_id,
      todo_checked: false,
      team_member_id: teamMemberId,
      todo_date,
    });

    return NextResponse.json({ todo: result }, { status: 201 });
  } catch (error) {
    console.error('todo作成時エラー', error);
    return NextResponse.json(
      { error: 'todoの作成に失敗しました' },
      { status: 500 },
    );
  }
};
