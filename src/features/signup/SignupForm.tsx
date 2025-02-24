'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/app/(auth)/signup/signup.module.scss';
import InputField from '@/components/inputField/InputField';
import SendButton from '@/components/sendButton/SendButton';
import { zodResolver } from '@hookform/resolvers/zod';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityIcon from '@mui/icons-material/VisibilityOutlined';
import { IconButton } from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const signupSchema = z.object({
  family_name: z.string().min(1, '姓は必須です'),
  given_name: z.string().min(1, '名は必須です'),
  user_name: z.string().min(1, 'ユーザー名は必須です'),
  email: z
    .string()
    .min(1, 'メールアドレスは必須です')
    .email('メールアドレスの形式が正しくありません'),
  password: z
    .string()
    .min(8, 'パスワードは8文字以上で入力してください')
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d).+$/,
      'パスワードは英字と数字の両方を含めてください',
    ),
});

type SignupFormData = z.infer<typeof signupSchema>;

// エラーの型定義
interface ErrorResponse {
  error?: string;
}

const SignupForm = () => {
  const [isPassVisible, setIsPassVisible] = useState({
    isVisible: false,
    type: 'password',
  });

  // react-hook-formの設定
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: SignupFormData) => {
    // 送信時の処理
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

      alert('登録が完了しました');
      router.push('/login');
    } catch (error) {
      console.error('Registration error', error);
      alert('サーバーエラーが発生しました。');
    }
  };

  return (
    <form
      action="post"
      className={styles.signup_form}
      onSubmit={(e) => {
        e.preventDefault();
        void handleSubmit(onSubmit)(e);
      }}
    >
      <InputField
        errorMessage={errors.family_name?.message}
        htmlFor="family_name"
        label="名前（姓）"
      >
        <input
          type="text"
          id="family_name"
          className={`${styles.signup_input_field} ${errors.family_name && styles.error_field}`}
          placeholder="例：山田"
          autoComplete="off"
          {...register('family_name')}
        />
      </InputField>
      <InputField
        errorMessage={errors.given_name?.message}
        htmlFor="given_name"
        label="名前（名）"
      >
        <input
          type="text"
          id="given_name"
          className={`${styles.signup_input_field} ${errors.given_name && styles.error_field}`}
          placeholder="例：太郎"
          autoComplete="off"
          {...register('given_name')}
        />
      </InputField>
      <InputField
        errorMessage={errors.user_name?.message}
        htmlFor="user_name"
        label="ユーザー名（ログイン後表示名）"
      >
        <input
          type="text"
          id="user_name"
          className={`${styles.signup_input_field} ${errors.user_name && styles.error_field}`}
          placeholder="例：taro"
          autoComplete="off"
          {...register('user_name')}
        />
      </InputField>
      <InputField
        errorMessage={errors.email?.message}
        htmlFor="email"
        label="メールアドレス"
      >
        <input
          type="text"
          id="email"
          className={`${styles.signup_input_field} ${errors.email && styles.error_field}`}
          placeholder="例：taro@example.com"
          autoComplete="off"
          {...register('email')}
        />
      </InputField>
      <InputField
        errorMessage={errors.password?.message}
        htmlFor="password"
        label="パスワード（8文字以上、半角英数字を含む）"
      >
        <div className={styles.signup_password_input_container}>
          <input
            type={isPassVisible.type}
            id="password"
            className={`${styles.signup_input_field} ${errors.password && styles.error_field}`}
            autoComplete="off"
            {...register('password')}
          />
          {/* パスワードの表示切替アイコン */}
          <IconButton
            className={styles.login_password_icon_button}
            onClick={() => {
              setIsPassVisible({
                isVisible: !isPassVisible.isVisible,
                type: isPassVisible.isVisible ? 'password' : 'text',
              });
            }}
          >
            {isPassVisible.isVisible ? (
              <VisibilityIcon />
            ) : (
              <VisibilityOffIcon />
            )}
          </IconButton>
        </div>
      </InputField>
      <SendButton value="新規登録" className={styles.signup_send_button} />
    </form>
  );
};

export default SignupForm;
