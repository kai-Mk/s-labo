import React from 'react';
import Link from 'next/link';
import styles from './forgotPassword.module.scss';

const ForgotPassword = () => {
  return (
    <>
      <h1 className={styles.auth_title}>パスワードを忘れた方</h1>
      <p>準備中</p>
      <Link href="/login">ログイン画面に戻る</Link>
    </>
  );
};

export default ForgotPassword;
