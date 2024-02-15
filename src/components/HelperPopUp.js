import React, { useState, useEffect } from 'react'


const HelperPopUp = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => {
        setIsOpen(false)
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true)
        }, 1500)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        <>
            {isOpen && (
                <div className='popup-modal'>
                    <div className='popup-modal-header'>
                        <h2>Thank you for visiting!</h2>
                        <svg
                            className='close-modal-btn'
                            onClick={handleClose}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="rgba(0, 0, 0, 0.6)"
                            width="2.25rem"
                            height="2.25rem"
                            style={{ cursor: 'pointer', marginBottom: '0.5rem' }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div>
                        <p className='popup-text'>
                            I hope these sites are useful to you.
                            <br />
                            <br />
                            To filter* by country, click the Category Name.
                            <br />
                            To submit a website, click at the bottom left.
                            <br />
                            <br />
                            <span>* Only for categories that have a country.</span>
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}


export default HelperPopUp

// Make Category Name a clickable toggle that changes the "view"