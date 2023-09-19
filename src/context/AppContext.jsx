import { createContext, useEffect, useState, useRef } from "react";

const AppContext = createContext()

function AppContextProvider({children}) {
    const [colorData, setColorData] = useState([])
    const [showColorPicker, setShowColorPicker] = useState(false)
    const [userSelection, setUserSelection] = useState({seed: '#5088c3', mode: 'monochrome'})
    const [hoveredItem, setHoveredItem] = useState(null)
    const [copiedHexCode, setCopiedHexCode] = useState('')
    const [isError, setIsError] = useState(false)
    const firstRender = useRef(true)

    useEffect(() => {
        if (firstRender.current) {
            callApi()
            firstRender.current = false
        }
    }, [])

// Check if the user is on a touch device or not
    function isTouchDevice() {
        return 'ontouchstart' in window || navigator.msMaxTouchPoints > 0
    }

    async function callApi(e) {
        e && e.preventDefault()

        try {
            const res = await fetch(`https://www.thecolorapi.com/scheme?hex=${userSelection.seed.slice(1)}&mode=${userSelection.mode}`)

            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`)
            }
            
            const data = await res.json()
            setColorData(data.colors)
        } catch (error) {
            setIsError(true)
            console.error('Error fetchting data:', error)
        }
    }

// Handle rendering of and data gathering from the form elements
    function handleModeChange(e) {
        const newMode = e.target.value
        updateUserSelection(userSelection.seed, newMode)
    }

    function handleSeedColorChange(newColor) {
        updateUserSelection(newColor, userSelection.mode)
    }

    function updateUserSelection(newSeed, newMode) {
        setUserSelection({seed: newSeed, mode: newMode})
    }

// If the user is on a touch device, the if statements in the handleMouseEnter and handleMouseLeave functions will not run
// This ensures a better user experience on touch devices
    function handleMouseEnter(hex) {
        if (!isTouchDevice()) {
            setHoveredItem(hex)
        }
    }
    
    function handleMouseLeave() {
        if (!isTouchDevice()) {
            setHoveredItem(null)
        }
    }

// Copy hex code, either the selected seed code or one from the generated color scheme
    function copyHexCode(hex, e) {
        if (e?.key === 'Enter' || !e) {
            navigator.clipboard.writeText(hex)
            setCopiedHexCode(hex)
            setTimeout(() => {
                setCopiedHexCode('')
            }, 2000)
        }
    }

    return (
        <AppContext.Provider
            value={{
                colorData,
                callApi,
                showColorPicker,
                setShowColorPicker,
                handleSeedColorChange,
                handleModeChange,
                userSelection,
                hoveredItem,
                handleMouseEnter,
                handleMouseLeave,
                copyHexCode,
                copiedHexCode,
                isError
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider }