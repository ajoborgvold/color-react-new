import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Color from "./Color"

function ColorScheme() {
    const { userSelection } = useContext(AppContext)

    return (
        <section className="color-scheme-container">
            <div className='scheme__heading'>
                <h1>Selected seed color: {userSelection.seed.toUpperCase()}</h1>
            </div>
            <div className='color-wrapper'>
                <Color />
            </div>
        </section>
    )
}

export default ColorScheme