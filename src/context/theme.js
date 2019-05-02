import { createContext } from 'react';

export const themes = {
  dark: {
    background: '#326599',
    forground: '#f2f2f2',
  },
  light: {
    background: '#dedede',
    forground: '#3232a2',
  },
}

export const ThemeContext = createContext({
  theme: themes.light,
  toggleTheme: () => {},
});