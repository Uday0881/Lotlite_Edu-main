import { useCallback } from 'react';
import { ThemeContext } from './themeContext.js';

export function ThemeProvider({ children }) {
  const setProgramTheme = useCallback((palette, slug) => {
    if (!palette) return;
    const root = document.documentElement;
    root.style.setProperty('--program-primary', palette.primary);
    root.style.setProperty('--program-secondary', palette.secondary);
    root.style.setProperty('--program-accent', palette.accent);
    root.style.setProperty('--program-glow', palette.glow || `${palette.accent}33`);
    root.style.setProperty('--program-gradient', `radial-gradient(circle at top left, ${palette.accent}20, transparent 55%)`);

    root.setAttribute('data-program-slug', slug || '');

    if (palette.page) {
      const isLight = document.documentElement.classList.contains('light');
      document.documentElement.setAttribute('data-theme', palette.page);
      if (isLight) document.documentElement.classList.add('light');
    } else {
      const mapping = {
        'msc-data-science': 'ds',
        'online-bca': 'it',
        'online-mba': 'crm',
        'msc-computer-applications': 'inc'
      };
      const themeKey = mapping[slug];
      if (themeKey) {
        const isLight = document.documentElement.classList.contains('light');
        document.documentElement.setAttribute('data-theme', themeKey);
        if (isLight) document.documentElement.classList.add('light');
      }
    }
  }, []);

  const clearTheme = useCallback(() => {
    const root = document.documentElement;
    root.style.removeProperty('--program-primary');
    root.style.removeProperty('--program-secondary');
    root.style.removeProperty('--program-accent');
    root.style.removeProperty('--program-glow');
    root.style.removeProperty('--program-gradient');
    root.removeAttribute('data-program-slug');
    root.removeAttribute('data-theme');
  }, []);

  return (
    <ThemeContext.Provider value={{ setProgramTheme, clearTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
