import type { ColorInstance } from 'color'
import Color from 'color'

function lshift(c: ColorInstance, shift: number) {
  const arr = c.lch().array()
  arr[0] += shift

  return Color.lch(arr)
}

export const colors = {
  black: '#111',
  white: '#fff',
  gray: ['#fafbfc', '#f6f8fa', '#e1e4e8', '#d1d5da', '#959da5', '#6a737d', '#586069', '#444d56', '#2f363d', '#24292e'],
  blue: ['#f1f8ff', '#dbedff', '#c8e1ff', '#79b8ff', '#2188ff', '#0366d6', '#005cc5', '#044289', '#032f62', '#05264c'],
  green: ['#f0fff4', '#dcffe4', '#bef5cb', '#85e89d', '#34d058', '#28a745', '#22863a', '#176f2c', '#165c26', '#144620'],
  yellow: ['#fffdef', '#fffbdd', '#fff5b1', '#ffea7f', '#ffdf5d', '#ffd33d', '#f9c513', '#dbab09', '#b08800', '#735c0f'],
  orange: ['#fff8f2', '#ffebda', '#ffd1ac', '#ffab70', '#fb8532', '#f66a0a', '#e36209', '#d15704', '#c24e00', '#a04100'],
  red: ['#ffeef0', '#ffdce0', '#fdaeb7', '#f97583', '#ea4a5a', '#d73a49', '#cb2431', '#b31d28', '#9e1c23', '#86181d'],
  purple: ['#f5f0ff', '#e6dcfd', '#d1bcf9', '#b392f0', '#8a63d2', '#6f42c1', '#5a32a3', '#4c2889', '#3a1d6e', '#29134e'],
  pink: ['#ffeef8', '#fedbf0', '#f9b3dd', '#f692ce', '#ec6cb9', '#ea4aaa', '#d03592', '#b93a86', '#99306f', '#6d224f'],
}

type RawColor = [number, number, number] | [number, number, number, number] | number[]

// ---------------------------------------------------------------------
//                               Dark base
// ---------------------------------------------------------------------

const luminosity = 5
const _background = Color.lch([luminosity, 0, 0])

const DARK = {
  _luminosity: luminosity,
  _background,
  _bg_shadow: lshift(_background, 80),
  _bg_selection: Color.lch([luminosity + 60, 10, 60, 0.1]),
  _subtle: lshift(_background, 35),
  _subtle_2: Color.lch([luminosity + 35, 25, 290]),
  _neutral: Color.lch([luminosity + 45, 4, 20]),
  _neutral_2: Color.lch([luminosity + 35, 6, 20]),
  _accent_1: Color.lch([luminosity + 40, 25, 35]),
  _accent_1_alt: Color.lch([luminosity + 30, 40, 35]),
  _accent_1_alt_alt: Color.lch([luminosity + 30, 5, 205]),
  _accent_2: Color.lch([luminosity + 42, 5, 205]),
}

// warm 3 (LCH)
// 1) 49.5 22 299
// 1) 45 20 325
// 3) 60 0 0 + bold

// ---------------------------------------------------------------------
//                              Light base
// ---------------------------------------------------------------------
const luminosity_light = 100
const _background_light = Color.lch([luminosity_light, 0, 0])

const LIGHT = {
  _luminosity: luminosity_light,
  _background: _background_light,
  _bg_shadow: lshift(_background_light, -80),
  _bg_selection: Color.lch([luminosity_light - 60, 10, 60, 0.1]),
  _subtle: lshift(_background_light, -35),
  _subtle_2: Color.lch([luminosity_light - 35, 25, 290]),
  _neutral: Color.lch([luminosity_light - 45, 4, 20]),
  _neutral_2: Color.lch([luminosity_light - 35, 6, 20]),
  _accent_1: Color.lch([luminosity_light - 40, 25, 35]),
  _accent_1_alt: Color.lch([luminosity_light - 30, 40, 35]),
  _accent_1_alt_alt: Color.lch([luminosity_light - 30, 5, 205]),
  _accent_2: Color.lch([luminosity_light - 42, 5, 205]),
}

// [dark, light]
export const ColorTokens_lch = {
  primary: [
    // [luminosity + 45, 15, 205],
    DARK._accent_1.array(),
    LIGHT._accent_1.array(),
  ],
  foreground: [
    lshift(_background, 45).array(),
    lshift(_background_light, -45).array(),
  ],
  activeForeground: [
    lshift(_background, 50).array(),
    lshift(_background_light, -50).array(),
  ],
  secondaryForeground: [
    lshift(_background, 30).array(),
    lshift(_background_light, -30).array(),
  ],
  ignored: [
    DARK._bg_shadow.alpha(0.25).array(),
    LIGHT._bg_shadow.alpha(0.25).array(),
  ],
  faded: [
    DARK._bg_shadow.alpha(0.15).array(),
    LIGHT._bg_shadow.alpha(0.15).array(),
  ],
  border: [
    lshift(_background, 6).array(),
    lshift(_background_light, -6).array(),
  ],
  background: [
    DARK._background.array(),
    LIGHT._background.array(),
  ],
  activeBackground: [
    lshift(_background, 3).array(),
    lshift(_background_light, -3).array(),
  ],
  selectionBackground: [
    lshift(DARK._bg_selection, 10).array(),
    lshift(LIGHT._bg_selection, -10).array(),
  ],
  selectionBackgroundActive: [
    lshift(DARK._bg_selection, 20).array(),
    lshift(LIGHT._bg_selection, -20).array(),
  ],
  selectionBackgroundInActive: [
    DARK._bg_selection.array(),
    LIGHT._bg_selection.array(),
  ],

  // soft overrides
  softBackground:       [[luminosity + 5, 0, 0], [luminosity_light - 5, 5, 100]],
  softActiveBackground: [[luminosity + 10, 0, 0], [luminosity_light - 10, 5, 100]],
  softBorder:           [[luminosity + 10, 0, 0], [luminosity_light - 10, 5, 100]],

  // black overrides
  blackForeground: [65, 6.95, 97.29, 0.8],
  blackBackground: [0, 0, 0],
  blackActiveBackground: [7, 4, 270],
  blackPunctuation: [25, 0, 0],

  // semantic tokens
  // L +20 (lowest contrast)
  comment: [lshift(DARK._background, 20).array(), lshift(LIGHT._background, -20).array()],
  punctuation: [lshift(DARK._background, 30).array(), lshift(LIGHT._background, -30).array()],

  class: [DARK._accent_1_alt_alt.array(), DARK._accent_1_alt_alt.array()],
  // class: [DARK._accent_2.array(), [45.95, 35.75, 287.04]],

  // L +35 (low contrast)
  keyword: [DARK._subtle.array(), LIGHT._subtle.array()],
  builtin: [DARK._subtle.array(), LIGHT._subtle.array()],
  operator: [DARK._subtle.array(), LIGHT._subtle.array()],
  interface: [DARK._subtle_2.array(), LIGHT._subtle_2.array()],
  // interface: [[luminosity + 35, 15, 220], [49.5, 24.82, 218.2]],
  type: [DARK._subtle_2.array(), LIGHT._subtle_2.array()],

  // L +30 - +45
  number: [lshift(DARK._accent_1, -10).array(), lshift(LIGHT._accent_1, 10).array()],
  boolean: [DARK._accent_1_alt.array(), LIGHT._accent_1_alt.array()],
  property: [DARK._neutral_2.array(), LIGHT._neutral_2.array()],
  // property: [[luminosity + 50, 5, 75], [55.42, 55.46, 93.05]],
  string: [DARK._accent_1.array(), LIGHT._accent_1.array()],
  function: [DARK._accent_2.array(), LIGHT._accent_2.array()],
  variable: [DARK._neutral.array(), LIGHT._neutral.array()],

  // L +50
  regex: [[luminosity + 50, 45, 45], [luminosity_light - 50, 45, 45]],

  // L +55
  constant: [[luminosity + 55, 30, 50], [luminosity_light - 55, 50, 60]],
  namespace: [[luminosity + 55, 35, 5], [luminosity_light - 55, 40, 360]],
  decorator: [[luminosity + 55, 20, 20], [luminosity_light - 55, 20, 20]],

  // colors
  green: [[55, 30.86, 162.77], [43.6, 37.63, 158.46]],
  cyan: [[55, 24.29, 212.24], [56.07, 29.18, 215.53]],
  blue: [[55, 27.78, 260.53], [43.39, 36.62, 269.15]],
  red: [[55, 36.26, 23.61], [47.66, 36.74, 24.6]],
  orange: [[55, 36.4, 60.51], [47.35, 47.9, 58.33]],
  yellow: [[55, 45.48, 92.3], [67.76, 57.23, 92.82]],
  magenta: [[55, 45.23, 352.95], [40.16, 47.6, 356.42]],
} satisfies Record<string, [RawColor, RawColor] | RawColor>

// -------------------------------------------------------------------
//                           postprocess
// -------------------------------------------------------------------

function customRound(n: number) {
  return Number.parseFloat(n.toFixed(2))
}

function toHex(arr: RawColor) {
  const str = arr[3] === undefined
    ? Color.lch(arr).hex()
    : Color.lch(arr).hexa()

  return str.toLowerCase()
}

let k: keyof typeof ColorTokens_lch, values: [RawColor, RawColor]

export const ColorTokens: Record<string, string[] | string> = {}

for (k in ColorTokens_lch) {
  values = ColorTokens_lch[k]

  if (!Array.isArray(values[0])) {
    ColorTokens[k] = toHex(values)
    continue
  }

  ColorTokens[k] = [
    toHex(values[0]),
    toHex(values[1]),
  ]

  // if (!Array.isArray(values)) {
  //   ColorTokens_lch[k] = Color(values).lch().array().map(customRound)
  //   continue
  // }
  // values[0] = Color(values[0]).lch().array().map(customRound)
  // values[1] = Color(values[1]).lch().array().map(customRound)
}
console.log(ColorTokens_lch)
console.log(ColorTokens)
