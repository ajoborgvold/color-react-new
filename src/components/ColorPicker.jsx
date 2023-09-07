import { useContext, useState, useRef, useCallback } from "react";
import { HexColorPicker } from "react-colorful";
import { AppContext } from "../context/AppContext";
import useClickOutside from "../utils/useClickOutside";

function ColorPicker() {
    const [isOpen, setIsOpen] = useState(false)
    const popover = useRef()
    const swatch = useRef()
    const { handleColorChange, userSelection } = useContext(AppContext)      

    const close = useCallback(() => setIsOpen(false), [])

    useClickOutside(popover, close)

    function handleKeyDownOnSwatch(e) {
        console.log(e.key)
        if (e.key === 'Enter') {
            setIsOpen(true)
        } else if (e.key === 'Backspace') {
            setIsOpen(false)
        }
    }

    function handleKeyDownOnPopover(e) {
        if (e.key === 'Backspace') {
            setIsOpen(false)
            swatch.current.focus()
        }
    }

    return (
        <div className="color-picker-wrapper">
            <div
                ref={swatch}
                tabIndex={0}
                onClick={() => setIsOpen(true)}
                onKeyDown={handleKeyDownOnSwatch}
                style={{
                    backgroundColor: userSelection.seed
                }}
                className="swatch"
                >
            </div>
            {isOpen && (
                <div 
                    ref={popover}
                    onKeyDown={handleKeyDownOnPopover}
                    className="popover"
                >
                    <label htmlFor="color-picker" className="label">Select a seed color</label>
                    <HexColorPicker
                        onChange={handleColorChange}
                        onFocus={() => setIsOpen(true)}
                        color={userSelection.seed}
                        id="color-picker"
                    />
                </div>
            )}
        </div>
    )
}

export default ColorPicker