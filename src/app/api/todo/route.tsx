import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getTeamMembersById } from '@/services/teamMember/getTeamMembersById';
import { createTodo } from '@/services/todo/createTodo';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

interface TodoRequestBody {
  todo_description: string;
  task_category_id: number;
  project_id: number;
  team_id: number;
  todo_date: Date;
}

export const POST = async (req: NextRequest) => {
  try {
    // ログイン中のユーザーIDを取得
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'ログインしてください' },
        { status: 401 },
      );
    }

    const currentUserId = session.user.id;
    // リクエストボディの取得
    const {
      todo_description,
      task_category_id,
      project_id,
      team_id,
      todo_date,
    }: TodoRequestBody = (await req.json()) as TodoRequestBody;

    // チームメンバーIDを取得
    const teamMemberId = (await getTeamMembersById(currentUserId)).find(
      (item) => item.team_id === team_id,
    )!.team_member_id;

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
