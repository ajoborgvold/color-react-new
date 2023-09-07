import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Color from "./Color"

function ColorScheme() {
    const { userSelection, copyHexCode, copiedHexCode, hoveredItem, handleMouseEnter, handleMouseLeave } = useContext(AppContext)

    return (
        <section className="color-scheme-container">
            <div className='color-scheme-container__top'>
                <p className='p--inter top--left'>Selected seed color:</p>
                <p
                    tabIndex={0}
                    onClick={() => copyHexCode(userSelection.seed)}
                    onKeyDown={e => copyHexCode(userSelection.seed, e)}
                    onMouseEnter={() => handleMouseEnter(userSelection.seed)}
                    onFocus={() => handleMouseEnter(userSelection.seed)}
                    onMouseLeave={handleMouseLeave}
                    onBlur={handleMouseLeave}
                    className='p--roboto top--right'
                >
                    {copiedHexCode === userSelection.seed ? 'Copied!' :
                        hoveredItem === userSelection.seed ? 'Copy hex code' : userSelection.seed.toUpperCase()}
                </p>
            </div>
            <div className='scheme-wrapper'>
                <Color />
            </div>
        </section>
    )
}

export default ColorScheme