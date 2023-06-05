import AppLink, { AppLinkTheme } from '@src/shared/ui/AppLink/AppLink'
import { LangSwitcher } from '@src/features/LangSwitcher'

import { useState } from 'react'
import classNames from '@src/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import styles from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const { t, i18n } = useTranslation()

  function toggle () {
    setCollapsed((prevState) => !prevState)
  }

  return (
    <div className={classNames(styles.sidebar, { collapsed }, [])}>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <h1 className={styles.sidebar__logo}>Logo</h1>
      <nav className={styles.sidebar__nav}>
        <AppLink to={'/'} theme={AppLinkTheme.SECONDARY} className={styles['sidebar__nav-link']}>
          {t('Main')}
        </AppLink>
        <AppLink
          to={'/about'} theme={AppLinkTheme.SECONDARY}
          className={styles['sidebar__nav-link']}
        >
          {t('About')}
        </AppLink>
      </nav>
      <div className={styles.sidebar__bottom}>
        <LangSwitcher />
      </div>
    </div>
  )
}

export {
  Sidebar
}
