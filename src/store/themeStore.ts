import { themeConfig } from '@/configs/theme.config'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Theme, LayoutType, Direction } from '@/@types/theme'

type SpecialtyType = 'default' | 'theme1' | 'theme2'

type ThemeState = Theme & {
  specialty: SpecialtyType
}

type ThemeAction = {
  setSchema: (payload: string) => void
  setMode: (payload: ThemeState['mode']) => void
  setSideNavCollapse: (payload: boolean) => void
  setDirection: (payload: Direction) => void
  setPanelExpand: (payload: boolean) => void
  setLayout: (payload: LayoutType) => void
  setPreviousLayout: (payload: LayoutType | '') => void
  setSpecialty: (payload: SpecialtyType) => void
}

const initialThemeState: ThemeState = {
  ...themeConfig,
  specialty: 'default',
}

export const useThemeStore = create<ThemeState & ThemeAction>()(
  persist(
    (set) => ({
      ...initialThemeState,
      setSchema: (payload) => set(() => ({ themeSchema: payload })),
      setMode: (payload) => set(() => ({ mode: payload })),
      setSideNavCollapse: (payload) =>
        set((state) => ({
          layout: { ...state.layout, sideNavCollapse: payload },
        })),
      setDirection: (payload) => set(() => ({ direction: payload })),
      setPanelExpand: (payload) => set(() => ({ panelExpand: payload })),
      setLayout: (payload) =>
        set((state) => ({
          layout: { ...state.layout, type: payload },
        })),
      setPreviousLayout: (payload) =>
        set((state) => ({
          layout: { ...state.layout, previousType: payload },
        })),
      setSpecialty: (payload) => set(() => ({ specialty: payload })),
    }),
    {
      name: 'theme', // persisted in localStorage
    }
  )
)
