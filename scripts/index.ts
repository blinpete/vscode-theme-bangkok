import fs from 'fs-extra'
import { themeDefBlack, themeDefDark, themeDefDarkSoft, themeDefLight, themeDefLightSoft } from './colors'
import { getXtermTheme } from './extra'
import getTheme from './theme'

console.log('starting')

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeJSON(
      './themes/dark.json',
      getTheme(themeDefDark),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/black.json',
      getTheme(themeDefBlack),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/dark-soft.json',
      getTheme(themeDefDarkSoft),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/light.json',
      getTheme(themeDefLight),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/light-soft.json',
      getTheme(themeDefLightSoft),
      { spaces: 2 },
    ),
  ]))

fs.mkdir('./extra', { recursive: true })
  .then(() => Promise.all([
    fs.writeJSON(
      './extra/xterm-light.json',
      getXtermTheme(themeDefLight),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './extra/xterm-dark.json',
      getXtermTheme(themeDefDark),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './extra/xterm-black.json',
      getXtermTheme(themeDefBlack),
      { spaces: 2 },
    ),
  ]))

console.log('finished')
