'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTeamMemberData } from '@/hooks/teamMember/useTeamMemberData';
import AddCircleIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton } from '@mui/material';
import { useSession } from 'next-auth/react';
import styles from './sidebar.module.scss';

const Sidebar = () => {
  // todo: チームメンバーからチーム名を取得するように変更する必要がある。
  const { data: session, status } = useSession();
  const userId = session?.user?.id;
  const { data } = useTeamMemberData(
    status === 'authenticated' ? userId : undefined,
  );

  const avatarURL = 'https://api.dicebear.com/9.x/glass/svg?seed=';

  return (
    <div className={styles.sidebar}>
      {data &&
        data.length !== 0 &&
        data.map((item) => (
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
      <Link href="/team/create">
        <IconButton className={styles.sidebar_add_button}>
          <AddCircleIcon sx={{ width: '50px', height: '50px' }} />
        </IconButton>
      </Link>
    </div>
  );
};

export default Sidebar;
