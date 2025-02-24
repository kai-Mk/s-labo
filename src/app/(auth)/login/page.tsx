import Link from 'next/link';
import LoginForm from '@/features/login/LoginForm';
import styles from './login.module.scss';

const Login = () => {
  return (
    <>
      <h1 className={styles.auth_title}>ログイン</h1>
      <LoginForm />
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
