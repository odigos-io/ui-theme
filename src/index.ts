import styled, { css, keyframes, useTheme } from 'styled-components'
import type * as StyledTypes from 'styled-components/dist/types'
import { type ITheme } from './styles'
import { Provider } from './provider'
import { useDarkMode } from './store'
import { ToggleDarkMode } from './components'
import { animations, opacity } from './styles'

const Theme = {
  Provider,
  useTheme: useTheme as () => ITheme,
  useDarkMode,
  ToggleDarkMode,
  animations,
  opacity,
}

export default Theme
export { styled, css, keyframes, type StyledTypes }
