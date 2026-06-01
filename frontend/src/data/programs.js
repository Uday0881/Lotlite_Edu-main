import { programmesData } from './programmesData.js'

/**
 * Generate a simplified array used by compatibility loaders, forms, and legacy routes.
 * The source of truth remains programmesData.js for curriculum, theme, and program metadata.
 */
const PROGRAMS = Object.values(programmesData.programs).map((program) => ({
  ...program,
  colorPalette: {
    primary: program.theme.primary,
    secondary: program.theme.secondary,
    accent: program.theme.accent,
  },
}))

export default PROGRAMS;
