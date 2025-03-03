import React from 'react';
import Image from 'next/image';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getTeamMembersById } from '@/services/teamMember/getTeamMembersById';
import { getServerSession } from 'next-auth';
import styles from './sidebar.module.scss';
import SidebarAddButton from './SidebarAddButton';

const Sidebar = async () => {
  // チーム名をもとにアバターを生成
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id ?? null;
  const teamMemberData = await getTeamMembersById(userId);
  const avatarURL = 'https://api.dicebear.com/9.x/glass/svg?seed=';

  return (
    <div className={styles.sidebar}>
      {teamMemberData &&
        teamMemberData.length !== 0 &&
        teamMemberData.map((item) => (
          <div className={styles.sidebar_logo} key={item.team_member_id}>
            <Image
              src={`${avatarURL}${item.team.team_name}`}
              alt="チームロゴ"
              className={styles.sidebar_logo_img}
              width={50}
              height={50}
              priority
              unoptimized
            />
            <p className={styles.sidebar_logo_name}>{item.team.team_name}</p>
          </div>
        ))}
      <SidebarAddButton />
    </div>
  );
};

export default Sidebar;
