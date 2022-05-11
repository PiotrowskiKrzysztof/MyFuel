import { createContext } from 'react';

type Theme = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

export const ThemeContext = createContext<Theme>({
  theme: 'light',
  toggleTheme: () => {},
});
