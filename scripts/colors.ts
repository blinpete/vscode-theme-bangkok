import type { ThemeConfig, ThemeDefinition, TokensBase, TokensLch } from './types'
import { alpha, applyOverrides, applyShifts, lshift, tokensLchToHex } from './helper'

export const themeDefDark = defineTheme({
  name: 'Bangkok Dark', // Dark Evening
  type: 'dark',
  luminosity_bg: 5,
  luminosity: 25,
})

export const themeDefBlack = defineTheme({
  name: 'Bangkok Black', // Dark Night
  type: 'dark',
  luminosity_bg: 5,
  luminosity: 15,
  shifts: {
    _subtle:   [-2, 0, 0],
    _accent_1: [0, -10, 0],
    _accent_2: [0, -5, 0],
  },
  overrides: {
    foreground:       [60, 5, 100],
    background:       [0, 0, 0],
    activeBackground: [10, 4, 300],
    punctuation:      [30, 0, 0],
    // activeBg: (l, c, h) => [7, 4, 270],
  },
})

export const themeDefDarkSoft = defineTheme({
  name: 'Bangkok Dark Soft', // Dark Day
  type: 'dark',
  luminosity_bg: 5,
  luminosity: 25,
  overrides: {
    background:       [5 + 5, 0, 0],
    activeBackground: [5 + 10, 0, 0],
    border:           [5 + 10, 0, 0],
  },
})

export const themeDefLight = defineTheme({
  name: 'Bangkok Light', // Light Day
  type: 'light',
  luminosity_bg: 100,
  luminosity: 100,
  shifts: {
    _subtle:           [0, 5, 40],
    _neutral:          [5, 4, 20],
    _neutral_2:        [5, 2, 20],
    _accent_1:         [5, -10, 0],
    _accent_1_alt_alt: [0, 8, 120],
    _accent_2:         [5, 3, 20],
    comment:           [0, 5, 70],
    punctuation:       [5, 0, 0],
    constant:          [0, 20, 10],
    namespace:         [0, 5, -5],

    green:   [-6, 7, 0],
    cyan:    [-6, 5, 0],
    blue:    [-6, 11, 0],
    red:     [-6, 0, 0],
    orange:  [-6, 12, 0],
    yellow:  [-6, 12, 0],
    magenta: [-6, 3, 0],
  },
})

export const themeDefLightSoft = defineTheme({
  name: 'Bangkok Light Soft', // Light Evening
  type: 'light',
  luminosity_bg: 100,
  luminosity: 100,
  extends: themeDefLight.tokensLCH,
  overrides: {
    background:       [100 - 5, 4, 70],
    activeBackground: [100 - 10, 4, 70],
    border:           [100 - 10, 4, 70],
  },
})

function defineTheme(config: ThemeConfig): ThemeDefinition {
  const coef = config.type === 'dark' ? 1 : -1

  // -------------------------------------------------
  const { luminosity_bg, luminosity } = config
  const _background = [luminosity_bg, 0, 0]

  const vars: TokensBase = {
    _bg_shadow:        [luminosity + 80 * coef, 0, 0],
    _bg_selection:     [luminosity + 60 * coef, 10, 60, 0.1],
    _subtle:           [luminosity + 30 * coef, 5, 0],
    _subtle_2:         [luminosity + 35 * coef, 25, 290], // alt [luminosity + 35, 15, 220]
    _neutral:          [luminosity + 45 * coef, 6, 20],
    _neutral_2:        [luminosity + 35 * coef, 10, 20], // alt [luminosity + 50, 5, 75]
    _accent_1:         [luminosity + 40 * coef, 35, 35],
    _accent_1_alt:     [luminosity + 30 * coef, 40, 35],
    _accent_1_alt_alt: [luminosity + 30 * coef, 5, 205],
    _accent_2:         [luminosity + 42 * coef, 10, 205],
  }

  // warm 3 (LCH)
  // 1) 49.5 22 299
  // 1) 45 20 325
  // 3) 60 0 0 + bold

  // mutate vars
  if (config.shifts) {
    applyShifts(vars, config.shifts)
  }
  if (config.overrides) {
    applyOverrides(vars, config.overrides)
  }
  // -------------------------------------------------

  let tokens: TokensLch

  if (config.extends) {
    tokens = { ...structuredClone(config.extends) }
  }
  else {
    tokens = {
      primary:             vars._accent_1,
      foreground:          [luminosity + 45 * coef, 0, 0],
      activeForeground:    [luminosity + 50 * coef, 0, 0],
      secondaryForeground: [luminosity + 30 * coef, 0, 0],
      ignored:             alpha(vars._bg_shadow, 0.25),
      faded:               alpha(vars._bg_shadow, 0.15),
      border:              [luminosity + 6 * coef, 0, 0],

      background:                  _background,
      activeBackground:            [luminosity + 3 * coef, 0, 0],
      selectionBackground:         lshift(vars._bg_selection, 10 * coef),
      selectionBackgroundActive:   lshift(vars._bg_selection, 20 * coef),
      selectionBackgroundInActive: vars._bg_selection,

      // soft overrides
      // softBackground:       [[luminosity_bg + 5, 0, 0], [luminosity_light - 5, 4, 70]],
      // softActiveBackground: [[luminosity_bg + 10, 0, 0], [luminosity_light - 10, 4, 70]],
      // softBorder:           [[luminosity_bg + 10, 0, 0], [luminosity_light - 10, 4, 70]],

      // semantic tokens
      // L +20 (lowest contrast)
      comment:     [luminosity + 20 * coef, 0, 0], // LIGHT [luminosity_light - 20, 5, 70]
      punctuation: [luminosity + 30 * coef, 0, 0], // LIGHT [luminosity -30 + 5, 0, 0]

      class: vars._accent_1_alt_alt,

      // L +35 (low contrast)
      keyword:   vars._subtle,
      builtin:   vars._subtle,
      operator:  vars._subtle,
      interface: vars._subtle_2,
      type:      vars._subtle_2,

      // L +30 - +45
      number:    lshift(vars._accent_1, -10 * coef),
      boolean:   vars._accent_1_alt,
      property:  vars._neutral_2,
      string:    vars._accent_1,
      function:  vars._accent_2,
      variable:  vars._neutral,

      // muted
      stringMuted:   alpha(vars._accent_1, 0.465),
      propertyMuted: alpha(vars._neutral_2, 0.465),

      // L +50
      regex: [luminosity + 50 * coef, 45, 45],

      // L +55
      constant: [luminosity + 55 * coef, 30, 50], // [luminosity_light - 55, 30+20, 50+10]],
      namespace: [luminosity + 55 * coef, 35, 5], // [luminosity_light - 55, 35+5, 5]],
      decorator: [luminosity + 55 * coef, 20, 20],

      // colors
      green:   [55, 30, 160],
      cyan:    [55, 24, 210],
      blue:    [55, 25, 260],
      red:     [55, 36, 25],
      orange:  [55, 36, 60],
      yellow:  [60, 45, 90],
      magenta: [55, 45, 350],
    }
  }

  // postprocess
  if (config.shifts) {
    applyShifts(tokens, config.shifts)
  }

  if (config.overrides) {
    applyOverrides(tokens, config.overrides)
  }

  return {
    color: config.type,
    name: config.name,
    tokensLCH: tokens,
    tokensHEX: tokensLchToHex(tokens),
  }
}

export const globalColors = {
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
