import AppLink, {AppLinkTheme} from "@src/shared/ui/AppLink/AppLink";
import {LangSwitcher} from "@src/features/LangSwitcher";

import {useState} from "react";
import classNames from '@src/shared/lib/classNames';

import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

const Sidebar = ({className}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  
  function toggle() {
    setCollapsed((prevState) => !prevState);
  }
  
  return (
    <div className={classNames(styles['sidebar'], {collapsed}, [])}>
      <h1 className={styles['sidebar__logo']}>Logo</h1>
      <nav className={styles['sidebar__nav']}>
        <AppLink to={'/'} theme={AppLinkTheme.SECONDARY} className={styles['sidebar__nav-link']}>
          Home
        </AppLink>
        <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY} className={styles['sidebar__nav-link']}>
          About
        </AppLink>
      </nav>
      <div className={styles['sidebar__bottom']}>
        <LangSwitcher />
      </div>
    </div>
  );
};

export {
  Sidebar
};