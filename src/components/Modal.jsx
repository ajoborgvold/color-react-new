import React, { useEffect, useRef, useState } from 'react';
import Typewriter from 'typewriter-effect';
// import { IoClose } from 'react-icons/io'
// import { AiOutlineCloseCircle } from 'react-icons/ai'

function Modal() {
    // const [showCloseIcon, setShowCloseIcon] = useState(false)
    const dialogRef = useRef(null)

    useEffect(() => {
        dialogRef.current.showModal()
        // setTimeout(() => {
        //     dialogRef.current.showModal()
        // }, 1000)

        setTimeout(() => {
            dialogRef.current.close()
        }, 17000)
    }, [])

    // function closeModal() {
    //     console.log('clicked')
    //     dialogRef.current.close()
    // }
    
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

    // useEffect(() => {
    //     setTimeout(() => {
    //         setShowCloseIcon(true)
    //     }, 100);
    // }, [])

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
                    // .pauseFor(1000)
                    .changeDelay(50)
                    .typeString(`<p>${textArray[0]}</p>`)
                    .pauseFor(1000)
                    .deleteAll(`<p>${textArray[0]}</p>`)
                    .typeString(`<p>${textArray[1]}</p>`)
                    .pauseFor(1000)
                    .deleteAll(`<p>${textArray[1]}</p>`)
                    .typeString(`<p>${textArray[2]}</p>`)
                    .pauseFor(1500)
                    .typeString(`<p>${textArray[3]}</p>`)
                    .pauseFor(1500)
                    .typeString(`<p>${textArray[4]}</p>`)
                    .start();
                }}
                />
            {/* {showCloseIcon && <AiOutlineCloseCircle className='close-icon'/>} */}
            {/* <button onClick={closeModal} className='btn close-btn'>Close</button> */}
        </dialog>
    );
}

export default Modal