import React, { useEffect, useRef } from 'react';
// import ReactTyped from 'react-typed';

function Modal() {
    const dialogRef = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            dialogRef.current.showModal()
        }, 1000)

        setTimeout(() => {
            dialogRef.current.close()
        }, 18000)
    }, [])

    const textArray = [
        "Welcome!",
        "1. Choose a seed color by clicking the color swatch.",
        "2. Choose a color mode from the dropdown menu.",
        "3. Click the button!"
    ]

    return (
        <dialog ref={dialogRef} className='modal'>
            <p>Test</p>
            {/* <ReactTyped
                strings={textArray}
                typeSpeed={60}
                backSpeed={5}
                startDelay={1100}
            /> */}
        </dialog>
    );
}

export default Modal