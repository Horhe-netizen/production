import {ThemeSwitcher} from "@src/features/ThemeSwitcher";
import classNames from "@src/shared/lib/classNames";
import styles from './Header.module.scss';

interface HeaderProps {
  className?: string
}

const Header = ({className}: HeaderProps) => {
  return (
    <header className={classNames(styles['header'], {}, [className])}>
      <h1 className={styles['header__page-title']}>Statistics</h1>
      <ThemeSwitcher />
    </header>
  );
}

export default Header;