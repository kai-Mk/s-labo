import Image from 'next/image';
import logo from '@/assets/images/s-labo_logo.png';
import Header from '@/components/layout/header/Header';
import styles from './auth.module.scss';

export default function AuthLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <div className={styles.auth}>
        <div className={styles.auth_header}></div>
        <div className={styles.auth_box}>
          <Image
            src={logo}
            alt="ロゴ"
            className={styles.auth_logo}
            width="200"
            height="50"
            priority
          />
          {children}
        </div>
      </div>
    </>
  );
}
