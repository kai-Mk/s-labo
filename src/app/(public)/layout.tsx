import Header from '@/components/layout/header/Header';
import AddCircleIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton } from '@mui/material';
import styles from './public.module.scss';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className={styles.main_wrapper}>
        <div className={styles.select_team_container}>
          <div className={styles.team_logo}></div>
          <div className={styles.team_logo}></div>
          <IconButton className={styles.add_team_button}>
            <AddCircleIcon sx={{ width: '50px', height: '50px' }} />
          </IconButton>
        </div>
        <div className={styles.team_project_container}>
          <div className={styles.team_project_select_bar}>
            <h2 className={styles.team_name}>チーム名</h2>
          </div>
          <div className={styles.team_project_container}>
            <div className={styles.team_project_box}>{children}</div>
          </div>
        </div>
      </main>
    </>
  );
}
