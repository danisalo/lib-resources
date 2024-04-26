import React, { useState } from 'react'
import { useMediaQuery } from "react-responsive"

import SubmissionModal from './SubmissionModal'


const Footer = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
    const isDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1823 })
    const isBigScreen = useMediaQuery({ minWidth: 1824 })
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
        document.body.classList.add('modal-open')
    }

    const closeModal = () => {
        setIsModalOpen(false)
        document.body.classList.remove('modal-open')
    }

    return (
        <>
            {isMobile && (
                <div className="footer-bg mt-4 fixed-bottom">
                    <div className="container py-2 px-0">
                        <div className="d-flex px-4">
                            <div className="col text-start">
                                <button className='open-modal-btn' onClick={openModal}>Click to submit a site!</button>
                                <SubmissionModal isOpen={isModalOpen} onRequestClose={closeModal} />
                            </div>
                            <div className="col text-end">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.danielsalomonm.com">Site by DS</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {(isTablet || isDesktop || isBigScreen) && (
                <div className="footer-bg mt-4 fixed-bottom">
                    <div className="container py-2 px-0">
                        <div className="d-flex">
                            <div className="col text-start">
                                <button className='open-modal-btn' onClick={openModal}>Click to submit a site!</button>
                                <SubmissionModal isOpen={isModalOpen} onRequestClose={closeModal} />
                            </div>
                            <div className="col text-end">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.danielsalomonm.com">Site by DS</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}


export default Footer