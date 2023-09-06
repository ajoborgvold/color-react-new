import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Color from "./Color"

function ColorScheme() {
    const { userSelection, copyHexCode, copiedHexCode } = useContext(AppContext)

    return (
        <section className="color-scheme-container">
            <div className='color-scheme-container__top'>
                <p className='p--large'>Selected seed color:</p>
                <p 
                    onClick={() => copyHexCode(userSelection.seed)}
                    className='p--large p--seed-color'
                >
                    {copiedHexCode === userSelection.seed ? 'Copied!' : userSelection.seed.toUpperCase()}
                </p>
            </div>
            {/* <p className='p--large'>
                Selected seed color: 
                <span
                    onClick={() => copyHexCode(userSelection.seed)} 
                    className='p--seed-color'
                >
                    {copiedHexCode === userSelection.seed ? 'Copied!' : userSelection.seed.toUpperCase()}
                </span>
            </p> */}
            <div className='scheme-wrapper'>
                <Color />
            </div>
        </section>
    )
}

export default ColorScheme