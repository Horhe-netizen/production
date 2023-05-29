import { createContext } from "react";

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';

const ThemeContext = createContext<ThemeContextProps>({});

export default ThemeContext;