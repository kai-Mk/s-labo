import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ArrowIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './teamDetails.module.scss';

interface NavButtonProps {
  path: string;
  label: string;
}

const NavButton = ({ path, label }: NavButtonProps) => {
  const pathname = usePathname();
  const isSelected = pathname === path;
  return (
    <li>
      <Link
        href={path}
        className={`${styles.left_bar_nav} ${isSelected && styles.selected_nav} `}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavButton;
