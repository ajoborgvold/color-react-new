import { createContext, useEffect, useState, useRef } from "react";

const AppContext = createContext()

function AppContextProvider({children}) {
    const [colorData, setColorData] = useState([])
    const firstRender = useRef(true)
    const [copiedHexCode, setCopiedHexCode] = useState('')
    const [showColorPicker, setShowColorPicker] = useState(false)
    const [userSelection, setUserSelection] = useState({seed: '#5088c3', mode: 'monochrome'})

    useEffect(() => {
        if (firstRender.current) {
            callApi()
            firstRender.current = false
        }
    }, [])

    async function callApi(e) {
        e && e.preventDefault()

        const res = await fetch(`https://www.thecolorapi.com/scheme?hex=${userSelection.seed.slice(1)}&mode=${userSelection.mode}`)
        const data = await res.json()
        setColorData(data.colors)
    }

    function handleColorSchemeClick(hex) {
        navigator.clipboard.writeText(hex)
        setCopiedHexCode(hex)
        setTimeout(() => {
            setCopiedHexCode('')
        }, 2000)
    }

    function handleModeChange(e) {
        const newMode = e.target.value
        updateUserSelection(userSelection.seed, newMode)
    }

    function handleColorPickerClick() {
        setShowColorPicker(!showColorPicker)
    }

    function handleColorChange(newColor) {
        updateUserSelection(newColor, userSelection.mode)
    }

    function updateUserSelection(newSeed, newMode) {
        setUserSelection({seed: newSeed, mode: newMode})
    }


    return (
        <AppContext.Provider
            value={{
                colorData,
                callApi,
                handleColorSchemeClick,
                copiedHexCode,
                handleModeChange,
                showColorPicker,
                handleColorPickerClick,
                handleColorChange,
                userSelection
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider }