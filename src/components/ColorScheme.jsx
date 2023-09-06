import { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import Color from "./Color"

function ColorScheme() {
    const { userSelection, copyHexCode, copiedHexCode } = useContext(AppContext)

    const [text, setText] = useState(userSelection.seed)

    return (
        <section className="color-scheme-container">
            <div className='color-scheme-container__top'>
                <p className='p--large top--left'>Selected seed color:</p>
                <p 
                    onClick={() => copyHexCode(userSelection.seed)}
                    onMouseEnter={() => setText('Copy')}
                    onMouseLeave={() => setText(userSelection.seed.toUpperCase())}
                    className='p--large top--right'
                >
                    {copiedHexCode === userSelection.seed ? 'Copied!' : text}
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