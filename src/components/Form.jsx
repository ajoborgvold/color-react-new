import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import ColorPicker from "./ColorPicker"
import Select from "./Select"

function Form() {
    const { callApi } = useContext(AppContext)

    return (
        <form className="form">
            <ColorPicker />
            <Select />
            <button 
                onClick={e => callApi(e)}
                className="btn color-btn"
            >
                Get color scheme
            </button>
        </form>
    )
}

export default Form