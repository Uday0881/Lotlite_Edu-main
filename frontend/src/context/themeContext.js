import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
  setProgramTheme: () => {},
  clearTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}
