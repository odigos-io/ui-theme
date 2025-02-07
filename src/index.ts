import { type ITheme } from './styles'
import { Provider } from './provider'
import { useDarkMode } from './context'
import { useTheme } from 'styled-components'
import { animations, opacity } from './styles'

const Theme = {
  Provider,
  useDarkMode,
  useTheme: useTheme as () => ITheme,
  animations,
  opacity,
}

export default Theme
