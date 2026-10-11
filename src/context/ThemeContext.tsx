import React, { createContext, useContext, useEffect } from 'react';

export type ThemeMode = 'light';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Clean Light Theme with High Contrast & Crystal Clear Typography
  const theme: ThemeMode = 'light';

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('light');
    root.classList.add('light-theme');
    root.classList.remove('dark');
    root.style.backgroundColor = '#F8FAFC';
    root.style.color = '#0F172A';
    localStorage.setItem('b4u_theme', 'light');
  }, []);

  const toggleTheme = () => {};
  const setTheme = () => {};

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
