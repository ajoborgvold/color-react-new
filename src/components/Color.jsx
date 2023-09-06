import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"

function Color() {
    const [hoveredItem, setHoveredItem] = useState(null)
    const { colorData, copyHexCode, copiedHexCode, userSelection } = useContext(AppContext)

    const colorEl = colorData.map(item => {
        const divStyle = {
            backgroundColor: item.hex.value,
        }

        return (
            <div
                key={item.hex.value}
                onClick={() => copyHexCode(item.hex.value)}
                onMouseEnter={() => setHoveredItem(item.hex.value)}
                onMouseLeave={() => setHoveredItem(null)}
                style={divStyle}
                className="color-item"
            >
                {!copiedHexCode || copiedHexCode === userSelection.seed ?
                    <p className="p--small color__p">
                        {hoveredItem === item.hex.value ? 'Copy hex code' : item.hex.value}
                    </p> :
                    copiedHexCode && item.hex.value === copiedHexCode ?
                        <p className="p--small color__p">Copied!</p> : null
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