import React from 'react'
import Modal from 'react-modal'
import ContactForm from './ContactForm'


const SubmissionModal = ({ isOpen, onRequestClose }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} className='submission-modal'>
            <div className='submission-modal-header'>
                <h2>Send any and all the sites you want!</h2>
                <svg
                    className='close-modal-btn'
                    onClick={onRequestClose}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="rgba(0, 0, 0, 0.6)"
                    width="2.25rem"
                    height="2.25rem"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
            <div className='contact-form-inputs'>
                <ContactForm isOpen={isOpen} onRequestClose={onRequestClose} />
            </div>
        </Modal>
    )
}


export default SubmissionModal