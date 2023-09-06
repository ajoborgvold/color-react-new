import { useState, useEffect } from "react"

function Header() {
    const [theme, setTheme] = useState('light')

    // Handle the user's theme preferences
        useEffect(() => {
            const userThemePref = getUserThemePref()
            const mediaQueryPref = getMediaQueryPref()
    
            if (userThemePref) {
                setTheme(userThemePref)
            } else {
                setTheme(mediaQueryPref)
            }
    
            document.body.dataset.theme = theme
    
        }, [theme])
        
    // Toggle theme in the app UI
        function toggleTheme() {
            const newTheme = theme === 'dark' ? 'light' : 'dark'
            setTheme(newTheme)
            storeUserThemePref(newTheme)
            document.body.dataset.theme = theme
        }
    
    // Store the user's theme preference in local storage
        function storeUserThemePref(pref) {
            localStorage.setItem('theme', pref)
        }
    
        function getUserThemePref() {
            return localStorage.getItem('theme')
        }
    
    // Get the user's theme preference from their OS
        function getMediaQueryPref() {
            const mediaQuery = "(prefers-color-scheme: dark)"
            const mql = window.matchMedia(mediaQuery)
            const hasPreference = typeof mql.matches === "boolean"
            
            if (hasPreference) {
                return mql.matches ? "dark" : "light";
            }
        }

    return (
        <header className="header">
            <button onClick={toggleTheme} className="btn theme-btn">
                {theme === 'light' ? 'Dark' : 'Light'}
            </button>
        </header>
    )
}

export default Header