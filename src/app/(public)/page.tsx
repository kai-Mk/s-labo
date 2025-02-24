import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

const Home = async () => {
  const session = await getServerSession(authOptions);
  return <div>ログイン中:{session?.user?.email}</div>;
};

export default Home;
