import { create } from 'zustand'

export interface DarkModeState {
  darkMode: boolean
}

export interface DarkModeStateSetters {
  setDarkMode: (bool: boolean) => void
}

export const useDarkMode = create<DarkModeState & DarkModeStateSetters>((set) => ({
  darkMode: true,
  setDarkMode: (bool) => set({ darkMode: bool }),
}))
