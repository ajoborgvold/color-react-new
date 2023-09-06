import { useContext } from "react"
import { AppContext } from "../context/AppContext"

function Color() {
    const { colorData, copyHexCode, copiedHexCode, userSelection, hoveredItem, handleMouseEnter, handleMouseLeave } = useContext(AppContext)

    const colorEl = colorData.map(item => {
        const divStyle = {
            backgroundColor: item.hex.value,
        }

        return (
            <div
                key={item.hex.value}
                onClick={() => copyHexCode(item.hex.value)}
                onMouseEnter={() => handleMouseEnter(item.hex.value)}
                onMouseLeave={handleMouseLeave}
                style={divStyle}
                className="color-item"
            >
                {!copiedHexCode || copiedHexCode === userSelection.seed ?
                    <p className="p--medium color__p">
                        {hoveredItem === item.hex.value ? 'Copy hex code' : item.hex.value}
                    </p> :
                    copiedHexCode && item.hex.value === copiedHexCode ?
                        <p className="p--medium color__p">Copied!</p> : null
                }
            </div>
        )
    })

    return (
        <>
            {colorEl}
        </>
    )
}

export default Color