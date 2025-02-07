'use client'

import React, { type FC, type PropsWithChildren } from 'react'
import '../styles/globals.css'
import { getTheme } from '../styles'
import { useDarkMode } from '../store'
import { ThemeProvider } from 'styled-components'

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  const { darkMode } = useDarkMode()

  return <ThemeProvider theme={getTheme(darkMode)}>{children}</ThemeProvider>
}
