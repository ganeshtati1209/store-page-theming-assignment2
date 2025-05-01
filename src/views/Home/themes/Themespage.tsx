import React from 'react'
import { useThemeStore } from '@/store/themeStore'

const ThemesPage: React.FC = () => {
  const { specialty, setSpecialty } = useThemeStore()

  const themes = [
    {
      id: 'default',
      label: 'Default Theme',
      description: 'Clean layout with corporate blue tones.',
      bgClass: 'bg-white',
    },
    {
      id: 'theme1',
      label: 'Organ Transplant Theme',
      description: 'Clinical greens and subtle contrast.',
      bgClass: 'bg-green-50',
    },
    {
      id: 'theme2',
      label: 'Cosmetic Surgery Theme',
      description: 'Elegant soft pinks and stylish text.',
      bgClass: 'bg-pink-50',
    },
  ]

  return (
    <div className="p-6">
      <h1 className="text-3xl font-heading text-primary mb-6">Select a Theme</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {themes.map((theme) => (
          <div
            key={theme.id}
            className={`rounded-xl w-full md:w-1/3 border-2 transition-all duration-300 shadow ${
              specialty === theme.id
                ? 'border-primary scale-105'
                : 'border-gray-300 scale-100'
            }`}
          >
            <div
              className={`p-6 h-full ${theme.bgClass} rounded-xl cursor-pointer`}
              onClick={() => setSpecialty(theme.id as any)}
            >
              <h2 className="text-xl font-heading mb-1">{theme.label}</h2>
              <p className="text-sm font-body text-text">{theme.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 rounded-lg border border-primary bg-background text-text shadow-sm">
        <h2 className="text-2xl font-heading text-primary mb-2">Live Theme Preview</h2>
        <p className="font-body text-base mb-4">
          This section updates dynamically based on the selected theme.
        </p>

        <button className="px-4 py-2 rounded bg-primary text-white font-body shadow">
          Themed Button
        </button>
      </div>
    </div>
  )
}

export default ThemesPage
