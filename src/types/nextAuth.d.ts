import { type DefaultSession, type DefaultUser } from 'next-auth';

declare module 'next-auth' {
  // セッションに user.id を追加
  interface Session {
    user: {
      id: string;
    } & DefaultSession['user'];
  }

  // authorize() や、user オブジェクトに id を追加
  interface User extends DefaultUser {
    id: string;
  }
}

declare module 'next-auth/jwt' {
  // JWT に id を追加
  interface JWT {
    id: string;
  }
}
