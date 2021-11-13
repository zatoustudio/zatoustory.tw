export interface Palette {
  light?: string
  main: string
  dark?: string
  contrastText?: string
}

export const Colors = {
  Purple: '#ca98c3',
  LightYellow: '#fee4af',
  Yellow: '#ffd682',
  Pink: '#f7c3bd',
  LightBlue: '#e0e6e9',
  White: '#ffffff',
} as const

export function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
