export interface ColorScheme {
  light: string
  lightgray: string
  gray: string
  darkgray: string
  dark: string
  secondary: string
  tertiary: string
  highlight: string
}

interface Colors {
  lightMode: ColorScheme
  darkMode: ColorScheme
}

export interface Theme {
  typography: {
    header: string
    body: string
    code: string
  }
  cdnCaching: boolean
  colors: Colors
  fontOrigin: "googleFonts" | "local"
}

export type ThemeKey = keyof Colors

const DEFAULT_SANS_SERIF =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
const DEFAULT_MONO = "ui-monospace, SFMono-Regular, SF Mono, Menlo, monospace"

export function googleFontHref(theme: Theme) {
  const { code, header, body } = theme.typography
  return `https://fonts.googleapis.com/css2?family=${code}&family=${header}:wght@400;700&family=${body}:ital,wght@0,400;0,600;1,400;1,600&display=swap`
}

export function joinStyles(theme: Theme, ...stylesheet: string[]) {
  return `${stylesheet.join("\n\n")}`
}
