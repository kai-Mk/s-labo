'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import styles from '@/app/(public)/team/[teamId]/mypage/mypage.module.scss';
import AddIcon from '@mui/icons-material/AddCircleOutlineRounded';

const AddButton = () => {
  const { teamId } = useParams<{ teamId: string }>();

  return (
    <Link href={`/team/${teamId}/create/todo`}>
      <AddIcon className={styles.mypage_todo_add_button} />
    </Link>
  );
};

export default AddButton;
