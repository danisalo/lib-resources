import React, { useState } from 'react'
import SubmissionModal from './SubmissionModal'


const Footer = () => {

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
            <div className="footer-bg mt-4">
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
        </>
    )
}


export default Footer