import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

interface TodoRequestBody {
  project_id: number;
  task_category_id: number;
  todo_description: string;
}

// 更新処理
export const PATCH = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  try {
    const { id } = await params;
    const { project_id, task_category_id, todo_description } =
      (await req.json()) as TodoRequestBody;

    const updateTodo = await prisma?.todo.update({
      where: {
        todo_id: Number(id),
      },
      data: {
        project_id: project_id,
        task_category_id: task_category_id,
        todo_description: todo_description,
      },
    });

    return NextResponse.json({ todo: updateTodo }, { status: 200 });
  } catch (error) {
    console.error('todo更新時エラー', error);
    return NextResponse.json(
      { error: 'todoの更新に失敗しました' },
      { status: 500 },
    );
  }
};

// 削除処理
export const DELETE = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  try {
    const { id } = await params;
    const now = new Date();

    const deletedTodo = await prisma?.todo.update({
      where: { todo_id: Number(id) },
      data: {
        deleted_at: now,
      },
    });

    return NextResponse.json({ todo: deletedTodo }, { status: 200 });
  } catch (error) {
    console.error('todo削除時エラー', error);
    return NextResponse.json(
      { error: 'todoの削除に失敗しました' },
      { status: 500 },
    );
  }
};
