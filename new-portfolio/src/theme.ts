export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'gv-theme'

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  localStorage.setItem(STORAGE_KEY, theme)
}
