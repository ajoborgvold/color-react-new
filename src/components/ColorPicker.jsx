import { useContext, useState, useRef, useCallback } from "react";
import { HexColorPicker } from "react-colorful";
import { AppContext } from "../context/AppContext";
import useClickOutside from "../utils/useClickOutside";

function ColorPicker() {
    const [isOpen, setIsOpen] = useState(false)
    const popover = useRef()
    const { handleColorChange, userSelection } = useContext(AppContext)

    const close = useCallback(() => setIsOpen(false), [])
    useClickOutside(popover, close)

    return (
        <div className="color-picker-wrapper">
            <div
                tabIndex={0}
                onClick={() => setIsOpen(true)}
                // onKeyDown={() => setIsOpen(true)}
                style={{
                    backgroundColor: userSelection.seed
                }}
                className="swatch"
            >
            </div>
            {isOpen && (
                <div ref={popover} className="popover">
                    <label htmlFor="color-picker" className="label">Select a seed color</label>
                    <HexColorPicker
                        onChange={handleColorChange}
                        color={userSelection.seed}
                        id="color-picker"
                    />
                </div>
            )}
        </div>
    )
}

export default ColorPicker