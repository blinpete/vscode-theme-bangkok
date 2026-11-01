export type TokensBase = Record<CustomBaseColorToken, number[]>
export type TokensLch = Record<CustomColorToken, number[]>
export type TokensHex = Record<CustomColorToken, string>
export type RawColor = [number, number, number] | [number, number, number, number] | number[]

type OptionalKeys<R> = { [K in keyof R]?: R[K] }

export interface ThemeConfig {
  type: 'light' | 'dark'
  name: string
  luminosity_bg: number
  luminosity: number
  shifts?: OptionalKeys<TokensLch | TokensBase>
  overrides?: OptionalKeys<TokensLch | TokensBase>
  extends?: TokensLch
}

export interface ThemeDefinition {
  color: 'light' | 'dark'
  name: string
  tokensLCH: TokensLch
  tokensHEX: TokensHex
}

export type CustomBaseColorToken = | '_bg_shadow'
  | '_bg_selection'
  | '_subtle'
  | '_subtle_2'
  | '_neutral'
  | '_neutral_2'
  | '_accent_1'
  | '_accent_1_alt'
  | '_accent_1_alt_alt'
  | '_accent_2'

export type CustomColorToken = |
  'primary'
  | 'foreground'
  | 'activeForeground'
  | 'secondaryForeground'
  | 'ignored'
  | 'faded'
  | 'border'
  | 'background'
  | 'activeBackground'
  | 'selectionBackground'
  | 'selectionBackgroundActive'
  | 'selectionBackgroundInActive'
  // | 'softBackground'
  // | 'softActiveBackground'
  // | 'softBorder'
  // | 'blackForeground'
  // | 'blackBackground'
  // | 'blackActiveBackground'
  // | 'blackPunctuation'
  | 'comment'
  | 'comment'
  | 'punctuation'
  | 'class'
  | 'class'
  | 'keyword'
  | 'builtin'
  | 'operator'
  | 'interface'
  | 'interface'
  | 'type'
  | 'number'
  | 'boolean'
  | 'property'
  | 'property'
  | 'string'
  | 'function'
  | 'variable'
  | 'stringMuted'
  | 'propertyMuted'
  | 'regex'
  | 'constant'
  | 'namespace'
  | 'decorator'
  | 'green'
  | 'cyan'
  | 'blue'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'magenta'
