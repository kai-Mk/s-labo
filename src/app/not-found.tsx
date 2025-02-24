import React from 'react';
import Header from '@/components/_layout/header/Header';
import styles from './notFound.module.scss';

const NotFound = () => {
  return (
    <>
      <Header />
      <div className={styles.not_found}>このページは存在しません</div>
    </>
  );
};

export default NotFound;
