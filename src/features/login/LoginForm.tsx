'use client';

import { register } from 'module';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/app/(auth)/login/login.module.scss';
import InputField from '@/components/inputField/InputField';
import SendButton from '@/components/sendButton/SendButton';
import { zodResolver } from '@hookform/resolvers/zod';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityIcon from '@mui/icons-material/VisibilityOutlined';
import { IconButton } from '@mui/material';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
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

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const [isPassVisible, setIsPassVisible] = useState({
    isVisible: false,
    type: 'password',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (result?.error) {
        alert(result.error);
      } else {
        alert('ログインに成功しました');
        router.push('/');
      }
    } catch (error) {
      console.error('予期しないエラー', error);
      alert('予期しないエラーが発生しました');
    }
  };

  return (
    <form
      className={styles.login_form}
      action="post"
      onSubmit={(e) => {
        e.preventDefault();
        void handleSubmit(onSubmit)(e);
      }}
    >
      <InputField
        errorMessage={errors.email?.message}
        htmlFor="email"
        label="メールアドレス"
      >
        <input
          type="email"
          id="email"
          className={`${styles.login_input_field} ${errors.email && styles.error_field}`}
          placeholder="メールアドレスを入力"
          autoComplete="off"
          {...register('email')}
        />
      </InputField>
      <InputField
        errorMessage={errors.password?.message}
        htmlFor="password"
        label="パスワード"
      >
        <div className={styles.login_password_input_field}>
          <input
            type={isPassVisible.type}
            id="password"
            className={`${styles.login_input_field} ${errors.password && styles.error_field}`}
            placeholder="パスワードを入力"
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
      <SendButton value="ログイン" className={styles.login_send_button} />
    </form>
  );
};

export default LoginForm;
