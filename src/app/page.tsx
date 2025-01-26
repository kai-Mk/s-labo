import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import styles from './home.module.scss';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return <p>ログイン中:{session?.user?.email}</p>;
}
