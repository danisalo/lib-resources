import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'


const ContactForm = ({ onRequestClose }) => {

    const form = useRef();
    const [submissionMessage, setSubmissionMessage] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
                `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
                form.current,
                {
                    publicKey: `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`,
                }
            )
            .then(
                () => {
                    setSubmissionMessage('Submission sent!');
                    form.current.reset();
                    setTimeout(() => {
                        setSubmissionMessage('Thanks for your submission!')
                    }, 5000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setSubmissionMessage(
                        'Something went wrong, please try again later.'
                    );
                    setTimeout(() => {
                        setSubmissionMessage(
                            'Something went wrong, please try again later.'
                        );
                    }, 5000);
                }
            );
    };


    return (
        <>
            <form ref={form} onSubmit={sendEmail} className="mt-2 contact-form-inputs">
                <div className="mb-3 contact-form-inputs">
                    <div className="mb-3">
                        <label htmlFor="website_entry" className="form-label">
                            Website or place:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="website_entry"
                            name="website_entry"
                            placeholder="Resource entry"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="website_description" className="form-label">
                            Comments:
                        </label>
                        <textarea
                            className="form-control"
                            id="website_description"
                            name="website_description"
                            rows="3"
                            placeholder="Share your thoughts or describe the website"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn my-btn-primary">
                            Send submission
                        </button>
                        <button className="btn my-btn-secondary ms-3" onClick={onRequestClose}>
                            Cancel
                        </button>
                    </div>
                </div>
                {submissionMessage && (
                    <div className="alert alert-success mt-3" role="alert">
                        {submissionMessage}
                    </div>
                )}
            </form>
        </>
    )
}


export default ContactForm