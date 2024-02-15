import React, { useState } from 'react'
import SubmissionModal from './SubmissionModal'

const Header = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
        document.body.classList.add('modal-open')
    }

    const closeModal = () => {
        setIsModalOpen(false)
        document.body.classList.remove('modal-open')
    }

    const openArchive = () => {
        window.open('https://archive.org/', '_blank')
    }

    return (
        <>
            <div className="row my-4">
                <div className="header">
                    <h1>Misc Library</h1>
                    <p className="description mt-2">
                        &#9734; A curated collection of <span className='underlined-span' onClick={openArchive}>www</span> resources for an enriched online journey. <span className='clickable-span' onClick={openModal}>Ever-evolving.</span> &#9734;
                    </p>
                    <SubmissionModal isOpen={isModalOpen} onRequestClose={closeModal} />
                    <p className="caption mt-1">Last updated Feb 2024</p>
                </div>
            </div >
        </>
    )
}


export default Header