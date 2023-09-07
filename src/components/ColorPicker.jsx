import { useContext, useState, useRef, useCallback } from "react";
import { HexColorPicker } from "react-colorful";
import { AppContext } from "../context/AppContext";
import useClickOutside from "../utils/useClickOutside";

function ColorPicker() {
    const [isOpen, setIsOpen] = useState(false)
    const popoverRef = useRef()
    const swatchRef = useRef()
    const { handleSeedColorChange, userSelection } = useContext(AppContext)

//--- Close the popover when the user clicks outside the color picker ---//
    const close = useCallback(() => setIsOpen(false), [])

    useClickOutside(popoverRef, close)

//--- Handle keyboard navigation ---//    
    function handleKeyDownOnSwatch(e) {
        if (e.key === 'Enter') {
            setIsOpen(true)
        } else if (e.key === 'Backspace') {
            setIsOpen(false)
        }
    }

    function handleKeyDownOnPopover(e) {
        if (e.key === 'Backspace') {
            setIsOpen(false)
            swatchRef.current.focus()
        }
    }

    return (
        <div className="color-picker-wrapper">
            <div
                ref={swatchRef}
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
                    ref={popoverRef}
                    onKeyDown={handleKeyDownOnPopover}
                    className="popover"
                >
                    <label htmlFor="color-picker" className="label">Select a seed color</label>
                    <HexColorPicker
                        onChange={handleSeedColorChange}
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