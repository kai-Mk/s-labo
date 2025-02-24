import React from 'react';
import Link from 'next/link';
import SignupForm from '@/features/signup/SignupForm';
import styles from './signup.module.scss';

const SignUp = () => {
  return (
    <>
      <h1 className={styles.auth_title}>新規登録</h1>
      <SignupForm />
      <p className={styles.is_signup_text}>
        会員登録がお済の方は
        <Link href="/login" className={styles.signup_link}>
          こちら
        </Link>
      </p>
    </>
  );
};

export default SignUp;
