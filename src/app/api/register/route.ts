import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import bcrypt from 'bcrypt';

interface ResisterBody {
  family_name: string;
  given_name: string;
  user_name: string;
  email: string;
  password: string;
}

export const POST = async (req: Request) => {
  try {
    const {
      family_name,
      given_name,
      user_name,
      email,
      password,
    }: ResisterBody = (await req.json()) as ResisterBody;

    // 既存ユーザーかチェック
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: 'ユーザーは既に存在します' },
        { status: 400 },
      );
    }

    // パスワードのハッシュ化
    const hashedPassword = await bcrypt.hash(password, 10);

    // 新規ユーザー作成
    const newUser = await prisma.user.create({
      data: {
        family_name,
        given_name,
        user_name,
        email,
        hashedPassword,
      },
    });

    return NextResponse.json({ user: newUser }, { status: 201 });
  } catch (error) {
    console.error('新規登録エラー', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
};
