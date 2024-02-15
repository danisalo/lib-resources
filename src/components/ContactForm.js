// import React, { useRef, useState } from 'react'
// import emailjs from '@emailjs/browser'


// const ContactForm = () => {

//     const form = useRef()
//     const [submissionMessage, setSubmissionMessage] = useState('')

//     const sendEmail = (e) => {
//         e.preventDefault()

//         emailjs
//             .sendForm(`${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
//                 `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
//                 form.current,
//                 {
//                     publicKey: `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`,
//                 }
//             )
//             .then(
//                 () => {
//                     // console.log('Submission sent!');
//                     setSubmissionMessage('Submission sent!')
//                     form.current.reset()
//                     setTimeout(() => {
//                         setSubmissionMessage('Thanks for your submission!')
//                     }, 5000)
//                 },
//                 (error) => {
//                     console.log('FAILED...', error.text)
//                     setSubmissionMessage('Something went wrong, please try again later.')
//                     setTimeout(() => {
//                         setSubmissionMessage('Something went wrong, please try again later.')
//                     }, 5000)
//                 }
//             )
//     }

//     return (
//         <>
//             <form ref={form} onSubmit={sendEmail} className="mt-4">
//                 <div className="mb-3">
//                     <label htmlFor="user_email" className="form-label">
//                         Your Email
//                     </label>
//                     <input type="email" className="form-control" id="user_email" name="user_email" />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="user_name" className="form-label">
//                         The website URL
//                     </label>
//                     <input type="text" className="form-control" id="user_name" name="user_name" />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="message" className="form-label">
//                         Why do you love this website?
//                     </label>
//                     <textarea className="form-control" id="message" name="message" rows="4"></textarea>
//                 </div>
//                 <button type="submit" className="btn btn-primary">
//                     Send submission
//                 </button>
//                 {submissionMessage && (
//                     <div className="alert alert-success mt-3" role="alert">
//                         {submissionMessage}
//                     </div>
//                 )}
//             </form>
//         </>
//     )
// }


// export default ContactForm


import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = ({ isOpen, onRequestClose }) => {
    const form = useRef();
    const [submissionMessage, setSubmissionMessage] = useState('');

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
                        setSubmissionMessage('Thanks for your submission!');
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
                    <label htmlFor="user_email" className="form-label">
                        Your Email
                    </label>
                    <input
                        type="email"
                        className="form-control contact-form-inputs"
                        id="user_email"
                        name="user_email"
                        placeholder="Enter your email"
                        required
                    />
                    <small className="form-text text-muted">
                        We will never share your email with anyone.
                    </small>
                </div>
                <div className="mb-3">
                    <label htmlFor="website_entry" className="form-label">
                        Website URL
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="website_entry"
                        name="website_entry"
                        placeholder="Enter the website URL"
                        required
                    />
                    <small className="form-text text-muted">
                        Please provide the link of the website.
                    </small>
                </div>
                <div className="mb-3">
                    <label htmlFor="website_description" className="form-label">
                        Description
                    </label>
                    <textarea
                        className="form-control"
                        id="website_description"
                        name="website_description"
                        rows="4"
                        placeholder="Share your thoughts or describe the website"
                        required
                    ></textarea>
                    <small className="form-text text-muted">
                        Why do you love this website?
                    </small>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn my-btn-primary">
                        Send submission
                    </button>
                    <button className="btn my-btn-secondary ms-3" onClick={onRequestClose}>
                        Cancel
                    </button>
                </div>
                {submissionMessage && (
                    <div className="alert alert-success mt-3" role="alert">
                        {submissionMessage}
                    </div>
                )}
            </form>
        </>
    );
};

export default ContactForm;
