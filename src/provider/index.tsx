'use client'

import React, { useEffect, type FC, type PropsWithChildren } from 'react'
import { useDarkMode } from '../store'
import { getTheme, type ITheme } from '../styles'
import { ThemeProvider } from 'styled-components'
import '../styles/globals.css'

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  const { darkMode, setDarkMode } = useDarkMode()

  useEffect(() => {
    // load stored value from localStorage
    if (typeof window !== 'undefined') {
      const lsValue = localStorage.getItem('darkMode')
      if (!!lsValue) setDarkMode(lsValue == 'true')
    }
  }, [])

  useEffect(() => {
    // store new value in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', JSON.stringify(darkMode))
    }
  }, [darkMode])

  return <ThemeProvider theme={getTheme(darkMode) as ITheme}>{children}</ThemeProvider>
}
