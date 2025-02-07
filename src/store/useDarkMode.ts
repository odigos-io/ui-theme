import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface DarkModeState {
  darkMode: boolean
}

export interface DarkModeStateSetters {
  setDarkMode: (bool: boolean) => void
}

export const useDarkMode = create<DarkModeState & DarkModeStateSetters>()(
  persist(
    (set) => ({
      darkMode: true,
      setDarkMode: (bool) => set({ darkMode: bool }),
    }),
    {
      name: 'odigos-dark-mode',
      storage: typeof window !== 'undefined' ? createJSONStorage(() => localStorage) : undefined,
    }
  )
)
