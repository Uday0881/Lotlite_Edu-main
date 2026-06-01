import { programmesData } from '../data/programmesData.js';

export function applyThemeForSlug(slug) {
  const program = Object.values(programmesData.programs).find((p) => p.slug === slug);
  if (!program) {
    return false;
  }

  const root = document.documentElement;
  root.style.setProperty('--program-primary', program.theme.primary);
  root.style.setProperty('--program-secondary', program.theme.secondary);
  root.style.setProperty('--program-accent', program.theme.accent);
  root.style.setProperty('--program-glow', program.theme.glow || `${program.theme.accent}33`);
  root.style.setProperty('--program-gradient', `radial-gradient(circle at top left, ${program.theme.accent}20, transparent 55%)`);
  root.setAttribute('data-program-slug', slug);

  if (program.theme?.page) {
    const isLight = document.documentElement.classList.contains('light');
    document.documentElement.setAttribute('data-theme', program.theme.page);
    if (isLight) document.documentElement.classList.add('light');
  }

  return true;
}
