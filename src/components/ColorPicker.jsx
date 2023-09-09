import { useContext, useRef, useCallback } from "react";
import { HexColorPicker } from "react-colorful";
import { AppContext } from "../context/AppContext";
import useClickOutside from "../utils/useClickOutside";

function ColorPicker() {
    const popoverRef = useRef()
    const {
        handleSeedColorChange,
        userSelection,
        showColorPicker,
        setShowColorPicker
    } = useContext(AppContext)

//--- Close the popover when the user clicks outside the color picker ---//
    const close = useCallback(() => setShowColorPicker(false), [])
    useClickOutside(popoverRef, close)

    return (
        <div className="color-picker-wrapper">
            <div
                tabIndex={0}
                onClick={() => setShowColorPicker(!showColorPicker)}
                onKeyDown={e => e.key === 'Enter' && setShowColorPicker(!showColorPicker)}
                style={{
                    backgroundColor: userSelection.seed
                }}
                className="swatch"
                >
            </div>
            {showColorPicker && (
                <div 
                    ref={popoverRef}
                    className="popover"
                >
                    <label htmlFor="color-picker" className="label">Select a seed color</label>
                    <HexColorPicker
                        onChange={handleSeedColorChange}
                        color={userSelection.seed}
                        id="color-picker"
                    />
                </div>
            )}
        </div>
    )
}

export default ColorPicker