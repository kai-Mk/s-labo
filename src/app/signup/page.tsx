'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AuthLayout from '@/components/authLayout/AuthLayout';
import InputField from '@/components/inputField/InputField';
import SendButton from '@/components/sendButton/SendButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import styles from './signup.module.scss';

// zodスキーマ定義
const signupSchema = z.object({
  family_name: z.string().min(1, '姓は必須です'),
  given_name: z.string().min(1, '名は必須です'),
  user_name: z.string().min(1, 'ユーザー名は必須です'),
  email: z.string().email('メールアドレスの形式が正しくありません'),
  password: z
    .string()
    .min(8, 'パスワードは8文字以上で入力してください')
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d).+$/,
      'パスワードは英字と数字の両方を含めてください',
    ),
});
type SignupFormData = z.infer<typeof signupSchema>;

// エラーの型を定義
interface ErrorResponse {
  error?: string;
}

const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = (await res.json()) as ErrorResponse;
        alert(errorData.error ?? '登録に失敗しました');
        return;
      }
      alert('ログインが完了しました');
      // ログイン画面に遷移
      router.push('/login');
    } catch (error) {
      console.error('Registration error', error);
      alert('サーバーエラーが発生しました。');
    }
  };

  return (
    <AuthLayout title="新規登録ページ">
      <form
        action="post"
        className={styles.signup_form}
        onSubmit={(e) => {
          e.preventDefault();
          void handleSubmit(onSubmit)(e);
        }}
      >
        <InputField errorMessage={errors.family_name?.message}>
          <input
            type="text"
            id="family_name"
            className={`${styles.signup_input_field} ${errors.family_name && styles.error_field}`}
            placeholder="名前（姓）"
            autoComplete="off"
            {...register('family_name')}
          />
        </InputField>
        <InputField errorMessage={errors.given_name?.message}>
          <input
            type="text"
            id="given_name"
            className={`${styles.signup_input_field} ${errors.given_name && styles.error_field}`}
            placeholder="名前（名）"
            autoComplete="off"
            {...register('given_name')}
          />
        </InputField>
        <InputField errorMessage={errors.user_name?.message}>
          <input
            type="text"
            id="user_name"
            className={`${styles.signup_input_field} ${errors.user_name && styles.error_field}`}
            placeholder="ユーザー名"
            autoComplete="off"
            {...register('user_name')}
          />
        </InputField>
        <InputField errorMessage={errors.email?.message}>
          <input
            type="email"
            id="email"
            className={`${styles.signup_input_field} ${errors.email && styles.error_field}`}
            placeholder="メールアドレス"
            autoComplete="off"
            {...register('email')}
          />
        </InputField>
        <InputField errorMessage={errors.password?.message}>
          <input
            type="password"
            id="password"
            className={`${styles.signup_input_field} ${errors.password && styles.error_field}`}
            placeholder="パスワード（8文字以上、英数字を含む）"
            autoComplete="off"
            {...register('password')}
          />
        </InputField>
        <SendButton value="新規登録" className={styles.signup_send_button} />
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
