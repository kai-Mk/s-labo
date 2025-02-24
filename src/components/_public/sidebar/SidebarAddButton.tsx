'use client';

import React from 'react';
import Link from 'next/link';
import AddCircleIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton } from '@mui/material';
import styles from './sidebar.module.scss';

const SidebarAddButton = () => {
  return (
    <Link href="/team/create">
      <IconButton className={styles.sidebar_add_button}>
        <AddCircleIcon sx={{ width: '50px', height: '50px' }} />
      </IconButton>
    </Link>
  );
};

export default SidebarAddButton;
