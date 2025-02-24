import type { AuthOptions } from 'next-auth';
import { prisma } from '@/lib/db';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(
        credentials: { email: string; password: string } | undefined,
      ): Promise<{ id: string; email: string; name: string } | null> {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('メールアドレスとパスワードを入力してください');
        }

        // DBからユーザーを検索
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user) {
          throw new Error('ユーザーが見つかりません');
        }

        // パスワードの照合
        const isValid = await bcrypt.compare(
          credentials.password,
          user.hashedPassword,
        );
        if (!isValid) {
          throw new Error('パスワードが違います');
        }

        // 認証成功
        return {
          id: user.user_id.toString(),
          email: user.email,
          name: user.user_name,
        };
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24, // 1日
  },
  callbacks: {
    // JWTからuser.idをtokenに追加
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    // tokenからsession.userにidを追加
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// ===NextAuth側でAppRouterの明確な型がないためESLintをスルーさせます。===
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const handler = NextAuth(authOptions);
/* eslint-enable @typescript-eslint/no-unsafe-assignment */

export { handler as GET, handler as POST };
