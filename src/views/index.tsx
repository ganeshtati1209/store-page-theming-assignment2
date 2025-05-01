
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import ThemesPage from './Home/themes/ThemesPage'

const Views: React.FC = () => {
  return (
    <Routes>
      {/* 🏠 Home Page */}
      <Route path="/" element={<Home />} />

      {/* 🎨 Themes Page */}
      <Route path="/themes" element={<ThemesPage />} />
    </Routes>
  )
}

export default Views
