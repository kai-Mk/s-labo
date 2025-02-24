import { type DefaultSession, type DefaultUser } from 'next-auth';

declare module 'next-auth' {
  // セッションにuser.idを追加
  interface Session {
    user: {
      id: string;
    } & DefaultSession['user'];
  }

  // authorize()や、userオブジェクトにidを追加
  interface User extends DefaultUser {
    id: string;
  }
}

declare module 'next-auth/jwt' {
  // JWTにidを追加
  interface JWT {
    id: string;
  }
}
