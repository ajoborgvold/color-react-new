import { useState, useEffect, useContext } from "react"
import { AppContext } from "../context/AppContext"


function Header() {
    const [theme, setTheme] = useState('light')
    const { setShowColorPicker } = useContext(AppContext)

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

// Get the user's theme preference from their OS
    function getMediaQueryPref() {
        const mediaQuery = "(prefers-color-scheme: dark)"
        const mql = window.matchMedia(mediaQuery)
        const hasPreference = typeof mql.matches === "boolean"

        if (hasPreference) {
            return mql.matches ? "dark" : "light";
        }
    }

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
    
    return (
        <header className="header">
            <button 
                onClick={toggleTheme} 
                onFocus={() => setShowColorPicker(false)} 
                className="btn theme-btn"
            >
                {theme === 'light' ? 'Dark' : 'Light'}
            </button>
        </header>
    )
}

export default Header