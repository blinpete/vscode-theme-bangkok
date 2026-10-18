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

const luminosity = 5
const _background = Color.lch([luminosity, 0, 0])
const _bg_shadow = lshift(_background, 80)
const _bg_selection = Color.lch([luminosity + 60, 10, 60, 0.1])

const _subtle = lshift(_background, 35)
const _neutral = Color.lch([luminosity + 45, 4, 20])
const _neutral_2 = Color.lch([luminosity + 35, 6, 20])
const _warm = Color.lch([luminosity + 40, 25, 35])
const _warm_2 = Color.lch([luminosity + 30, 40, 35])
const _warm_3 = Color.lch([luminosity + 42, 5, 205])
const _warm_3_alt = Color.lch([luminosity + 30, 5, 205])
const _cold = Color.lch([luminosity + 35, 25, 290])

// warm 3 (LCH)
// 1) 49.5 22 299
// 1) 45 20 325
// 3) 60 0 0 + bold

// [dark, light]
export const ColorTokens_lch = {
  primary: [
    // [luminosity + 45, 15, 205],
    _warm.array(),
    [39.96, 35.07, 158.32],
  ],
  foreground: [
    lshift(_background, 45).array(),
    [24.14, 3.99, 116.07],
  ],
  activeForeground: [
    lshift(_background, 50).array(),
    [33.28, 5.04, 114.37],
  ],
  secondaryForeground: [
    lshift(_background, 30).array(),
    [24.14, 3.99, 116.07, 0.565],
  ],
  ignored: [
    _bg_shadow.alpha(0.25).array(),
    [24.14, 3.99, 116.07, 0.314],
  ],
  faded: [
    _bg_shadow.alpha(0.15).array(),
    [24.14, 3.99, 116.07, 0.0627],
  ],
  border: [
    lshift(_background, 6).array(),
    [94.8, 0, 158.2],
  ],
  background: [
    _background.array(),
    [100, 0, 158.2],
  ],
  activeBackground: [
    lshift(_background, 3).array(),
    [97.23, 0, 158.2],
  ],
  selectionBackground: [
    lshift(_bg_selection, 10).array(),
    [13.23, 0, 158.2, 0.0941],
  ],
  selectionBackgroundActive: [
    lshift(_bg_selection, 20).array(),
    [13.23, 0, 158.2, 0.0941],
  ],
  selectionBackgroundInActive: [
    _bg_selection.array(),
    [13.23, 0, 158.2, 0.0627],
  ],

  // soft overrides
  softBackground: [[luminosity + 5, 0, 0], [94.7, 3.6, 104.21]],
  softActiveBackground: [[luminosity + 10, 0, 0], [90.84, 5.22, 101.76]],
  softBorder: [[luminosity + 10, 0, 0], [90.84, 5.22, 101.76]],

  // black overrides
  blackForeground: [65, 6.95, 97.29, 0.8],
  blackBackground: [0, 0, 0],
  blackActiveBackground: [7, 4, 270],
  blackPunctuation: [25, 0, 0],

  // semantic tokens
  // L +30 (low contrast)
  comment: [lshift(_background, 20).array(), [69.4, 8.71, 144.01]],
  punctuation: [lshift(_background, 30).array(), [63.22, 0, 158.2]],
  keyword: [_subtle.array(), [43.6, 37.63, 158.46]],

  // L +40
  class: [_warm_3_alt.array(), [45.95, 35.75, 287.04]],
  // class: [_warm_3.array(), [45.95, 35.75, 287.04]],
  // interface: [[luminosity + 35, 15, 220], [49.5, 24.82, 218.2]],
  interface: [_cold.array(), [49.5, 24.82, 218.2]],
  builtin: [_subtle.array(), [47.66, 36.74, 24.6]],

  // L +45
  string: [_warm.array(), [52.56, 36.22, 37.67]],
  number: [lshift(_warm, -10).array(), [47.12, 23.48, 223.02]],
  // boolean: [lshift(_warm, -10).array(), [43.6, 37.63, 158.46]],
  boolean: [_warm_2.array(), [43.6, 37.63, 158.46]],
  variable: [_neutral.array(), [56.45, 38.98, 69]],
  operator: [_subtle.array(), [47.66, 36.74, 24.6]],
  type: [_cold.array(), [53.85, 31.05, 182.36]],

  // L +50
  regex: [[luminosity + 50, 45, 45], [48.29, 42.32, 47.74]],

  // L +55
  function: [_warm_3.array(), [51.56, 46.86, 129.85]],
  constant: [[luminosity + 55, 30, 50], [47.35, 47.9, 58.33]],
  property: [_neutral_2.array(), [55.42, 55.46, 93.05]],
  // property: [[luminosity + 50, 5, 75], [55.42, 55.46, 93.05]],
  namespace: [[luminosity + 55, 35, 5], [49.38, 38.37, 358.81]],
  decorator: [[luminosity + 55, 20, 20], [63.71, 18.67, 21.27]],

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
console.log(ColorTokens)
