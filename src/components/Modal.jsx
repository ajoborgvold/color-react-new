import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';

function Modal() {
    const dialogRef = useRef(null)

    useEffect(() => {
        dialogRef.current.showModal()

        setTimeout(() => {
            dialogRef.current.close()
        }, 17000)
    }, [])
    
    function closeModalonClickOutside(e) {
        const dialogDimensions = dialogRef.current.getBoundingClientRect()
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            dialogRef.current.close()
        }
    }

    const textArray = [
        "New to this app?",
        "Let's get started!",
        "1. Click the color swatch to choose a seed color.",
        "2. Choose a color mode from the dropdown menu.",
        "3. Click the button!"
    ]

    return (
        <dialog ref={dialogRef} onClick={closeModalonClickOutside} className='modal'>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                    .changeDelay(50)
                    .typeString(`<p class="p--roboto">${textArray[0]}</p>`)
                    .pauseFor(750)
                    .deleteAll(`<p class="p--roboto">${textArray[0]}</p>`)
                    .typeString(`<p class="p--roboto">${textArray[1]}</p>`)
                    .pauseFor(750)
                    .deleteAll(`<p class="p--roboto">${textArray[1]}</p>`)
                    .typeString(`<p class="p--roboto">${textArray[2]}</p>`)
                    .pauseFor(1000)
                    .typeString(`<p class="p--roboto">${textArray[3]}</p>`)
                    .pauseFor(1000)
                    .typeString(`<p class="p--roboto">${textArray[4]}</p>`)
                    .start();
                }}
                />
        </dialog>
    );
}

export default Modal