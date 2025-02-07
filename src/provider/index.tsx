import React, { type FC, type PropsWithChildren } from 'react'
import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import { getTheme, type ITheme } from '../styles'
import { DarkModeConsumer, DarkModeProvider } from '../context'

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <DarkModeProvider>
      <DarkModeConsumer>{({ darkMode }) => <ThemeProvider theme={getTheme(darkMode) as ITheme}>{children}</ThemeProvider>}</DarkModeConsumer>
    </DarkModeProvider>
  )
}
