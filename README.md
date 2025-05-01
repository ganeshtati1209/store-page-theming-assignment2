# GoGetWell.ai Theme System – Assignment 2

This React + Vite project implements a scalable multi-theme system using Zustand and Tailwind CSS. It allows users to switch between three themes with live UI changes.

---

## What Has Been Done (With File Paths)

### 1. Project Setup

- Vite + React + TypeScript initialized
- TailwindCSS configured
- Zustand installed

Files:
- tailwind.config.cjs  
- src/assets/styles/app.css  
- vite.config.ts

---

### 2. Theme Store Setup

File: `src/store/themeStore.ts`

- Created Zustand store:
  - `specialty`: tracks active theme (`default`, `theme1`, `theme2`)
  - `setSpecialty()`: updates theme
- Uses `persist` middleware to save theme in localStorage

---

### 3. Global Theme Application

File: `src/components/template/ThemeProvider.tsx`

- Wraps the entire app
- Applies `document.documentElement.className = "theme-[specialty]"`
- Activates theme-specific CSS variables

Used in `App.tsx` or `main.tsx`:
```tsx
<ThemeProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</ThemeProvider>


Themes Page UI
File: src/views/Home/themes/ThemesPage.tsx

Page available at /themes

Displays 3 themed cards with:

Different background color (bg-white, bg-green-50, bg-pink-50)

Theme label and description

Frame border and scale change on selection

Live preview box below reflects selected theme styling



tailwind.config.cjs


colors: {
  primary: 'var(--primary)',
  background: 'var(--bg)',
  text: 'var(--text)',
},
fontFamily: {
  heading: 'var(--font-heading)',
  body: 'var(--font-body)',
}



Routing
File: src/views/index.tsx

import ThemesPage from '@/views/Home/themes/ThemesPage'

<Routes>
  <Route path="/themes" element={<ThemesPage />} />
</Routes>
    



How to Run the Project
npm install
npm run dev



Then visit: http://localhost:5173/themes