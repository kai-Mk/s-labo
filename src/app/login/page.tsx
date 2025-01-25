'use client';

import React from 'react';
import Link from 'next/link';
import AuthLayout from '@/components/authLayout/AuthLayout';
import SendButton from '@/components/sendButton/SendButton';
import { z } from 'zod';
import styles from './login.module.scss';

const loginSchema = z.object({
  email: z
    .string()
    .email('メールアドレスの形式が正しくありません')
    .min(1, 'メールアドレスは必須です'),
  password: z
    .string()
    .min(8, 'パスワードは8文字以上で入力してください')
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d).+$/,
      'パスワードは英字と数字の両方を含めてください',
    )
    .min(1, 'パスワードは必須です'),
});
const Login = () => {
  return (
    <AuthLayout title="ログイン画面">
      <form action="post" className={styles.login_form}>
        <input
          type="email"
          id="email"
          className={styles.login_input_field}
          placeholder="メールアドレス"
          autoComplete="off"
        />
        <input
          type="password"
          id="password"
          className={styles.login_input_field}
          placeholder="パスワード"
          autoComplete="off"
        />
        <p className={styles.login_forget_pass_text}>
          パスワードを忘れた方は
          <Link href="" className={styles.login_link}>
            こちら
          </Link>
        </p>

        <SendButton value="ログイン" className={styles.login_send_button} />
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
