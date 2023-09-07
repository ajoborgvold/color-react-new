import { useContext } from "react"
import { AppContext } from "../context/AppContext"

function Select() {
    const { handleModeChange } = useContext(AppContext)

    const optionsObj = {
        'monochrome': 'Monochrome',
        'monochrome-dark': 'Monochrome dark',
        'monochrome-light': 'Monochrome light',
        'analogic': 'Analogic',
        'complement': 'Complement',
        'analogic-complement': 'Analogic complement',
        'triad': 'Triad',
        'quad': 'Quad'
    }

    const optionsEL = Object.keys(optionsObj).map(item => {
        return (
            <option key={item} value={item}>{optionsObj[item]}</option>
        )
    })

    return (
        <div className="select-wrapper">
            <label htmlFor="mode" className="label">Select a color mode</label>
            <select onChange={handleModeChange} name="mode" id="mode" className="select-element">
                {optionsEL}
            </select>
        </div>
    )
}

export default Select