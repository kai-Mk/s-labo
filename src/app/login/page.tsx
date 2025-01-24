'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/s-labo_logo.png';
import SendButton from '@/components/sendButton/SendButton';
import styles from './login.module.scss';

const Login = () => {
  const handleLogin = () => {
    // eslint-disable-next-line no-console
    console.log('ログイン');
  };

  return (
    <div className={styles.login}>
      <div className={styles.login_header}></div>
      <div className={styles.login_box}>
        <Image
          src={logo}
          alt="ロゴ"
          className={styles.login_logo}
          width="200"
          height="50"
          priority
        />
        <h1 className={styles.login_title}>ログイン画面</h1>
        <form action="post" className={styles.login_form}>
          <input
            type="text"
            id="mail"
            className={styles.login_input_field}
            name="mail"
            placeholder="メールアドレス"
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
      </div>
    </div>
  );
};

export default Login;
