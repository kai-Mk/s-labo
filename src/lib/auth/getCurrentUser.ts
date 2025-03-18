import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

export const getCurrentUser = async () => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      throw new Error('ログインしてください');
    }
    return session.user; // ユーザー情報を返す
  } catch (error) {
    console.error('ユーザー情報の取得に失敗:', error);
    throw new Error('ユーザー情報の取得に失敗しました');
  }
};
