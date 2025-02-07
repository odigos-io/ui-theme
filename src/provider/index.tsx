'use client'

import React, { useState, type FC, type PropsWithChildren } from 'react'
import '../styles/globals.css'
import { getTheme } from '../styles'
import { useDarkMode } from '../store'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components'

const StyledComponentsRegistry: FC<PropsWithChildren> = ({ children }) => {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== 'undefined') return <>{children}</>

  return <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>
}

const Provider: FC<PropsWithChildren> = ({ children }) => {
  const { darkMode } = useDarkMode()

  return (
    <ThemeProvider theme={getTheme(darkMode)}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </ThemeProvider>
  )
}

// default to allow dynamic import
export default Provider
