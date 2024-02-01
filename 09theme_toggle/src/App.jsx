import { useEffect, useState } from 'react'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeProvider } from './context/theme'

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const darkTheme = () => {
    setThemeMode('dark')
  }

  const lightTheme = () => {
    // changing the state value
    setThemeMode('light')
  }

  useEffect(() => {
    // removing whatever the theme class is
    document.querySelector('html').classList.remove('dark', 'light');

    // adding the selected theme class
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])


  return (
    <ThemeProvider 
      value={{themeMode, darkTheme, lightTheme}}
    >
      <div className="flex flex-wrap min-h-screen items-center justify-center">
        <div className="w-full max-w-sm shadow-xl">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn /> 
          </div>

          <div className="w-full max-w-sm mx-auto"></div>
          <Card />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
