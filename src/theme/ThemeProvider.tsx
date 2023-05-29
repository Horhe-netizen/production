import ThemeContext, { LOCAL_STORAGE_THEME_KEY, Theme } from "./ThemeContext";
import { useMemo, useState } from "react";

interface Props {
  children: React.ReactNode
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.DARK

const ThemeProvider = (props: Props) => {
  const [theme, setTheme] = useState(defaultTheme);

  function toggleTheme() {
    setTheme((prevState) => prevState === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  }

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;