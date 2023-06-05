import { useContext } from 'react'
import ThemeContext, { LOCAL_STORAGE_THEME_KEY, Theme } from './ThemeContext'

interface UseThemResult {
  toggleTheme: () => void
  theme: Theme
}

function useTheme (): UseThemResult {
  const { theme, setTheme } = useContext(ThemeContext)

  function toggleTheme () {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return { theme, toggleTheme }
}

export default useTheme
