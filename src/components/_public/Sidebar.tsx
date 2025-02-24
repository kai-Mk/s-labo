import React from 'react';
import styles from './sidebar.module.scss';
import SidebarAddButton from './SidebarAddButton';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SidebarAddButton />
    </div>
  );
};

export default Sidebar;
