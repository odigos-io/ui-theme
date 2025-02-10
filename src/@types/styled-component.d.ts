import 'styled-components'
import type { ITheme } from '../styles'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
