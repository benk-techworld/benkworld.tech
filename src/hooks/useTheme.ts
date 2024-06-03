import { useState,useCallback } from 'react';

type Theme = 'dark' | 'light';

const useTheme = (): [Theme, (theme: Theme) => void] => {
    
  const getInitialTheme = (): Theme => {

    // Retrieve theme from local storage
    const storedTheme = localStorage.getItem('theme') as Theme;

    if (storedTheme) {
      return storedTheme;
    }

    // Determine the initial theme based on system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [theme, setThemeState] = useState<Theme>(getInitialTheme());

  // Apply the theme class to the document root element
  document.documentElement.className = theme;

  // Persist the theme in local storage
  const setTheme = useCallback ((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
  },[]);

  return [theme, setTheme];
};

export default useTheme;
