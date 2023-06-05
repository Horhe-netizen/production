import { useTheme, Theme } from '@src/app/providers/ThemeProvider'
import classNames from '@src/shared/lib/classNames'

import SunIcon from '@src/shared/assets/icons/sun.svg'
import MoonIcon from '@src/shared/assets/icons/moon.svg'
import styles from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      className={classNames(styles['theme-switcher'], {}, [props.className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <SunIcon className={styles['theme-switcher__icon']} /> : <MoonIcon className={styles['theme-switcher__icon']} />}
    </button>
  )
}

export default ThemeSwitcher
