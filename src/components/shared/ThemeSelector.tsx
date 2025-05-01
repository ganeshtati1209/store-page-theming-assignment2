import React from 'react'
import { useThemeStore } from '@/store/themeStore'

const ThemeSelector: React.FC = () => {
  const { specialty, setSpecialty } = useThemeStore()

  return (
    <select
      value={specialty}
      onChange={(e) => setSpecialty(e.target.value as any)}
      className="text-black rounded border px-2 py-1"
    >
      <option value="default">Default</option>
      <option value="theme1">Organ Transplant</option>
      <option value="theme2">Cosmetic Surgery</option>
    </select>
  )
}

export default ThemeSelector
