'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import InputField from '@/components/inputField/InputField';
import SendButton from '@/components/sendButton/SendButton';
import { zodResolver } from '@hookform/resolvers/zod';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityIcon from '@mui/icons-material/VisibilityOutlined';
import { IconButton } from '@mui/material';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import styles from './login.module.scss';

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

const Login = () => {
  // パスワードの表示切替状態管理
  const [isPassVisible, setIsPassVisible] = useState({
    isVisible: false,
    type: 'password',
  });

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  // ログイン処理
  const onSubmit = async (data: LoginFormData) => {
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
  };

  return (
    <>
      <h1 className={styles.auth_title}> ログイン</h1>
      <form
        action="post"
        className={styles.login_form}
        onSubmit={(e) => {
          e.preventDefault();
          void handleSubmit(onSubmit)(e);
        }}
      >
        <InputField errorMessage={errors.email?.message}>
          <input
            type="email"
            id="email"
            className={`${styles.login_input_field} ${errors.email && styles.error_field}`}
            placeholder="メールアドレス"
            autoComplete="off"
            {...register('email')}
          />
        </InputField>
        <InputField errorMessage={errors.password?.message}>
          <input
            type={isPassVisible.type}
            id="password"
            className={`${styles.login_input_field} ${errors.password && styles.error_field}`}
            placeholder="パスワード"
            autoComplete="off"
            {...register('password')}
          />
          {/* パスワードの表示切替 */}
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
        </InputField>
        <SendButton value="ログイン" className={styles.login_send_button} />
      </form>
      <div className={styles.login_link_text_container}>
        <p className={styles.login_link_text}>
          パスワードを忘れた方は
          <Link href="/forgot-password" className={styles.login_link}>
            こちら
          </Link>
        </p>
        <p className={styles.login_link_text}>
          会員登録がまだの方は
          <Link href="/signup" className={styles.login_link}>
            こちら
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
