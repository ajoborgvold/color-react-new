import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Color from "./Color"

function ColorScheme() {
    const { userSelection } = useContext(AppContext)

    return (
        <section className="color-scheme-container">
            <p className='p--large'>Selected seed color: <span className='border-bottom'>{userSelection.seed.toUpperCase()}</span></p>
            <div className='scheme-wrapper'>
                <Color />
            </div>
        </section>
    )
}

export default ColorScheme