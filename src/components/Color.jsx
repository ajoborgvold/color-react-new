import { useContext } from "react"
import { AppContext } from "../context/AppContext"

function Color() {
    const { colorData, copyHexCode, copiedHexCode, userSelection } = useContext(AppContext)

    const colorEl = colorData.map(item => {
        const divStyle = {
            backgroundColor: item.hex.value,
        }

        return (
            <div
                key={item.hex.value}
                onClick={() => copyHexCode(item.hex.value)}
                style={divStyle}
                className="color-item"
            >
                {
                    !copiedHexCode || copiedHexCode === userSelection.seed ?
                        <p className="p--small color__p">{item.hex.value}</p> :
                        copiedHexCode && item.hex.value === copiedHexCode ?
                            <p className="p--small color__p">Copied!</p> :
                            <p className="p--small color__p hidden">{item.hex.value}</p>
                }
            </div>
        )
    })

    return (
        <>
            {colorEl}
        </>
    )

    // return (
    //     <div className="color-wrapper">
    //         {colorEl}
    //     </div>
    // )
}

export default Color