import fs from 'fs-extra'
import { getXtermTheme } from './extra'
import getTheme from './theme'

console.log('starting')

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeJSON(
      './themes/light.json',
      getTheme({
        color: 'light',
        name: 'Bangkok Light',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/dark.json',
      getTheme({
        color: 'dark',
        name: 'Bangkok Dark',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/black.json',
      getTheme({
        color: 'dark',
        name: 'Bangkok Black',
        black: true,
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/light-soft.json',
      getTheme({
        color: 'light',
        name: 'Bangkok Light Soft',
        soft: true,
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/dark-soft.json',
      getTheme({
        color: 'dark',
        name: 'Bangkok Dark Soft',
        soft: true,
      }),
      { spaces: 2 },
    ),
  ]))

fs.mkdir('./extra', { recursive: true })
  .then(() => Promise.all([
    fs.writeJSON(
      './extra/xterm-light.json',
      getXtermTheme({
        color: 'light',
        name: 'Bangkok Light',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './extra/xterm-dark.json',
      getXtermTheme({
        color: 'dark',
        name: 'Bangkok Dark',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './extra/xterm-black.json',
      getXtermTheme({
        color: 'dark',
        name: 'Bangkok Black',
        black: true,
      }),
      { spaces: 2 },
    ),
  ]))

console.log('finished')
