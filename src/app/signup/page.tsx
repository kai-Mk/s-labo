'use client';

import React from 'react';
import Link from 'next/link';
import AuthLayout from '@/components/authLayout/AuthLayout';
import SendButton from '@/components/sendButton/SendButton';
import styles from './signup.module.scss';

const SignUp = () => {
  const handleSignup = () => {
    // eslint-disable-next-line no-console
    console.log('新規登録');
  };

  return (
    <AuthLayout title="新規登録ページ">
      <form action="post" className={styles.signup_form}>
        <input
          type="text"
          id="family_name"
          className={styles.signup_input_field}
          name="family_name"
          placeholder="名前（姓）"
          autoComplete="off"
        />
        <input
          type="text"
          id="given_name"
          className={styles.signup_input_field}
          name="given_name"
          placeholder="名前（名）"
          autoComplete="off"
        />
        <input
          type="text"
          id="user_name"
          className={styles.signup_input_field}
          name="user_name"
          placeholder="ユーザー名"
          autoComplete="off"
        />
        <input
          type="email"
          id="email"
          className={styles.signup_input_field}
          name="email"
          placeholder="メールアドレス"
          autoComplete="off"
        />
        <input
          type="password"
          id="password"
          className={styles.signup_input_field}
          name="password"
          placeholder="パスワード（8文字以上、英数字を含む）"
          autoComplete="off"
        />
        <SendButton
          value="新規登録"
          onClick={handleSignup}
          className={styles.signup_send_button}
        />
      </form>
      <p className={styles.is_signup_text}>
        会員登録がお済方は
        <Link href="/login" className={styles.signup_link}>
          こちら
        </Link>
      </p>
    </AuthLayout>
  );
};

export default SignUp;
