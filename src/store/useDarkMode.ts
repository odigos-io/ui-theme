import { create } from 'zustand'

export interface DarkModeState {
  darkMode: boolean
}

export interface DarkModeStateSetters {
  setDarkMode: (bool: boolean) => void
}

export const useDarkMode = create<DarkModeState & DarkModeStateSetters>((set) => ({
  darkMode: [undefined, null, 'true'].includes(localStorage.getItem('darkMode')),
  setDarkMode: (bool) => set({ darkMode: bool }),
}))
