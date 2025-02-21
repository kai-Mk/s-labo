import Image from 'next/image';
import styles from './auth.module.scss';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={styles.auth}>
        <div className={styles.auth_header}></div>
        <div className={styles.auth_box}>
          <Image
            src="/s-labo_logo.png"
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
