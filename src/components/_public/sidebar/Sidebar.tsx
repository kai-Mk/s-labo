import React from 'react';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getTeamMembersById } from '@/services/teamMember/getTeamMembersById';
import { getServerSession } from 'next-auth';
import styles from './sidebar.module.scss';
import SidebarAddButton from './SidebarAddButton';

const Sidebar = async () => {
  // TODO:チームの情報を表示する処理を書く
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id ?? null;
  const teamMemberData = await getTeamMembersById(userId);
  return (
    <div className={styles.sidebar}>
      <SidebarAddButton />
    </div>
  );
};

export default Sidebar;
