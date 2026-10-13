import Color from 'color'

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

// [dark, light]
export const ColorTokens = {
  primary: [[50, 30.86, 162.77], [39.96, 35.07, 158.32]],

  foreground: [[70, 6.95, 97.29, 0.93], [24.14, 3.99, 116.07]],
  activeForeground: [[60, 8.8, 96.74], [33.28, 5.04, 114.37]],
  secondaryForeground: [[55, 3.71, 98.57, 0.56], [24.14, 3.99, 116.07, 0.56]],

  ignored: [[70, 3.71, 98.57, 0.31], [24.14, 3.99, 116.07, 0.31]],
  faded: [[70, 3.71, 98.57, 0.06], [24.14, 3.99, 116.07, 0.06]],
  border: [[10, 0, 158.2], [94.8, 0, 158.2]],

  background: [[5, 0, 0], [100, 0, 0]],
  activeBackground: [[10, 0, 0], [97.23, 0, 0]],
  selectionBackground: [[90, 0, 0, 0.09], [13.23, 0, 0, 0.09]],
  selectionBackgroundActive: [[90, 0, 0, 0.09], [13.23, 0, 0, 0.09]],
  selectionBackgroundInActive: [[80, 0, 0, 0.06], [13.23, 0, 0, 0.06]],

  // soft overrides
  softBackground: [[13, 0, 0], [94.7, 3.6, 104.21]],
  softActiveBackground: [[16, 0, 0], [90.84, 5.22, 101.76]],
  softBorder: [[15, 0, 0], [90.84, 5.22, 101.76]],

  // black overrides
  blackForeground: [65, 6.95, 97.29, 0.8],
  blackBackground: [0, 0, 0],
  blackActiveBackground: [7, 0, 0],
  blackPunctuation: [29, 0, 0],

  comment: [[45, 11.28, 143.75, 0.87], [69.4, 8.71, 144.01]],
  string: [[55, 27.94, 36.68], [52.56, 36.22, 37.67]],
  variable: [[55, 30.22, 74.17], [56.45, 38.98, 69]],
  keyword: [[55, 30.86, 162.77], [43.6, 37.63, 158.46]],
  number: [[55, 26.43, 185.77], [47.12, 23.48, 223.02]],
  boolean: [[55, 30.86, 162.77], [43.6, 37.63, 158.46]],
  operator: [[55, 36.26, 23.61], [47.66, 36.74, 24.6]],
  function: [[55, 38.67, 130.18], [51.56, 46.86, 129.85]],
  constant: [[55, 28.91, 50.7], [47.35, 47.9, 58.33]],
  class: [[55, 33.45, 288.94], [45.95, 35.75, 287.04]],
  interface: [[55, 20.93, 223.69], [49.5, 24.82, 218.2]],
  type: [[55, 28.95, 173], [53.85, 31.05, 182.36]],
  builtin: [[55, 36.26, 23.61], [47.66, 36.74, 24.6]],
  property: [[55, 37.17, 96.34], [55.42, 55.46, 93.05]],
  namespace: [[55, 34.2, 6.6], [49.38, 38.37, 358.81]],
  punctuation: [[35, 0, 158.2], [63.22, 0, 158.2]],
  decorator: [[55, 18.67, 21.27], [63.71, 18.67, 21.27]],
  regex: [[55, 44.35, 47.3], [48.29, 42.32, 47.74]],

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

let k: keyof typeof ColorTokens, values: [RawColor, RawColor]
for (k in ColorTokens) {
  values = ColorTokens[k]

  if (!Array.isArray(values[0])) {
    ColorTokens[k] = toHex(values)
    continue
  }

  values[0] = toHex(values[0])
  values[1] = toHex(values[1])

  // if (!Array.isArray(values)) {
  //   ColorTokens[k] = Color(values).lch().array().map(customRound)
  //   continue
  // }
  // values[0] = Color(values[0]).lch().array().map(customRound)
  // values[1] = Color(values[1]).lch().array().map(customRound)
}
console.log(ColorTokens)
