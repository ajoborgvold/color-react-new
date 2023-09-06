import { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import Color from "./Color"

function ColorScheme() {
    // const [hoveredItem, setHoveredItem] = useState(null)
    const { userSelection, copyHexCode, copiedHexCode, hoveredItem, handleMouseEnter, handleMouseLeave } = useContext(AppContext)

    // function isTouchDevice() {
    //     return 'ontouchstart' in window || navigator.msMaxTouchPoints > 0
    // }

    // function handleMouseEnter(hex) {
    //     if (!isTouchDevice()) {
    //         setHoveredItem(hex)
    //     }
    // }
    
    // function handleMouseLeave() {
    //     if (!isTouchDevice()) {
    //         setHoveredItem(null)
    //     }
    // }

    return (
        <section className="color-scheme-container">
            <div className='color-scheme-container__top'>
                <p className='p--large top--left'>Selected seed color:</p>
                <p 
                    onClick={() => copyHexCode(userSelection.seed)}
                    onMouseEnter={() => handleMouseEnter(userSelection.seed)}
                    onMouseLeave={handleMouseLeave}
                    className='p--large top--right'
                >
                    {copiedHexCode === userSelection.seed ? 'Copied!' :
                     hoveredItem  === userSelection.seed ? 'Copy' : userSelection.seed}
                </p>
            </div>
            <div className='scheme-wrapper'>
                <Color />
            </div>
        </section>
    )
}

export default ColorScheme