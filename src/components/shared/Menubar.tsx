import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeSelector from './ThemeSelector'

const MenuBar: React.FC = () => {
  const location = useLocation()

  return (
    <nav className="bg-primary text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex gap-4">
          <Link to="/" className={`${location.pathname === '/' ? 'underline' : ''}`}>Home</Link>
          <Link to="/themes" className={`${location.pathname === '/themes' ? 'underline' : ''}`}>Themes</Link>
        </div>
        <ThemeSelector />
      </div>
    </nav>
  )
}

export default MenuBar
