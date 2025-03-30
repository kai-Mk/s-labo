import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

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
