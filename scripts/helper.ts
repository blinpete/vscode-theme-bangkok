import type { CustomColorToken, RawColor, ThemeDefinition, TokensHex, TokensLch } from './types'
import Color from 'color'
import { globalColors } from './colors'

export function lshift(c: RawColor, shift: number) {
  const copy = [...c]
  copy[0] += shift
  return copy
}

export function alpha(c: RawColor, value: number): RawColor {
  const copy = [...c]
  copy[3] = value
  return copy
}

function toHex(arr: RawColor) {
  const str = arr[3] === undefined
    ? Color.lch(arr).hex()
    : Color.lch(arr).hexa()

  return str.toLowerCase()
}

export function tokensLchToHex(tokens: TokensLch) {
  const tokensHex = {} as TokensHex

  for (const [k, color] of Object.entries(tokens)) {
    tokensHex[k as CustomColorToken] = toHex(color)
  }

  return tokensHex
}

export function applyShifts<T extends Record<string, number[]>>(colors: T, shifts: T) {
  for (const k in colors) {
    if (shifts[k]) {
      for (let i = 0; i < shifts[k].length; i++) {
        colors[k][i] += shifts[k][i]
      }
    }
  }

  return colors
}

export function applyOverrides<T extends Record<string, number[]>>(colors: T, overrides: T) {
  for (const k in colors) {
    if (overrides[k]) {
      colors[k] = overrides[k]
    }
  }

  return colors
}

function toArray<T>(arr: T | T[]): T[] {
  if (Array.isArray(arr))
    return arr
  return [arr]
}

function getColors(style: 'light' | 'dark'): typeof globalColors {
  if (style === 'dark') {
    /* The array of light to dark colors are reversed to auto-generate dark theme */
    const darkColors: any = {}
    Object.entries(globalColors).forEach(([name, val]) => {
      if (name === 'black')
        darkColors.white = val

      else if (name === 'white')
        darkColors.black = val

      else
        darkColors[name] = [...toArray(val)].reverse()
    })
    return darkColors
  }
  else {
    return globalColors
  }
}

export function createThemeHelpers({ color, tokensHEX }: ThemeDefinition) {
  const pick = (options: { light?: string, dark?: string }) => options[color]

  const v = (key: CustomColorToken) => tokensHEX[key]

  const colors = getColors(color)

  return {
    pick,
    colors,
    v,
  }
}
