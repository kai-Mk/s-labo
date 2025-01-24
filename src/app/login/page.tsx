'use client';

import React from 'react';
import Link from 'next/link';
import AuthLayout from '@/components/authLayout/AuthLayout';
import SendButton from '@/components/sendButton/SendButton';
import styles from './login.module.scss';

const Login = () => {
  const handleLogin = () => {
    // eslint-disable-next-line no-console
    console.log('ログイン');
  };

  return (
    <AuthLayout title="ログイン画面">
      <form action="post" className={styles.login_form}>
        <input
          type="email"
          id="email"
          className={styles.login_input_field}
          name="email"
          placeholder="メールアドレス"
          autoComplete="off"
        />
        <input
          type="password"
          id="password"
          className={styles.login_input_field}
          name="password"
          placeholder="パスワード"
          autoComplete="off"
        />
        <p className={styles.login_forget_pass_text}>
          パスワードを忘れた方は
          <Link href="" className={styles.login_link}>
            こちら
          </Link>
        </p>

        <SendButton
          value="ログイン"
          onClick={handleLogin}
          className={styles.login_send_button}
        />
      </form>
      <p className={styles.login_not_signup_text}>
        会員登録がまだの方は
        <Link href="/signup" className={styles.login_link}>
          こちら
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
