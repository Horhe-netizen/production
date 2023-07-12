import { useTheme, Theme } from '@src/app/providers/ThemeProvider'
import classNames from '@src/shared/lib/classNames/classNames'

import SunIcon from '@src/shared/assets/icons/sun.svg'
import MoonIcon from '@src/shared/assets/icons/moon.svg'
import styles from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  const sunIcon = () => <SunIcon className={styles['theme-switcher__icon']} />
  const moonIcon = () => <MoonIcon className={styles['theme-switcher__icon']} />

  return (
    <button
      className={classNames(styles['theme-switcher'], {}, [className ?? ''])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? sunIcon() : moonIcon()}
    </button>
  )
}

export default ThemeSwitcher
