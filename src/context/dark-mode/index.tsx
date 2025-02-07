import React, { createContext, useState, useContext, type PropsWithChildren, useEffect } from 'react'

const init: {
  darkMode: boolean
  toggleDarkMode: (bool?: boolean) => void
} = {
  darkMode: true,
  toggleDarkMode: () => {},
}

const Context = createContext(init)

const DarkModeProvider = ({ children }: PropsWithChildren) => {
  const [darkMode, setDarkMode] = useState(init.darkMode)

  useEffect(() => {
    // load stored value from localStorage
    if (typeof window !== 'undefined') {
      const lsValue = localStorage.getItem('darkMode')
      if (!!lsValue) setDarkMode(lsValue == 'true')
    }
  }, [])

  const toggleDarkMode = (bool?: boolean) => {
    const val = typeof bool === 'boolean' ? bool : !darkMode
    setDarkMode(val)

    // store new value in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', JSON.stringify(val))
    }
  }

  return <Context.Provider value={{ darkMode, toggleDarkMode }}>{children}</Context.Provider>
}

const DarkModeConsumer = Context.Consumer

const useDarkMode = () => useContext(Context)

export { DarkModeProvider, DarkModeConsumer, useDarkMode }
