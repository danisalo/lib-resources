import React, { useState } from "react"


const CollapsibleList = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleCollapse = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="collapsible-list px-4 mb-2">
                <div className="collapsible-header d-flex align-items-center" onClick={toggleCollapse}>
                    <h2 className="pe-2">{title}</h2>
                    <div className="align-items-center">
                        {isOpen ? (
                            <svg
                                // xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="3"
                                stroke="rgba(0, 0, 0, 0.6)"
                                width="1.25rem"
                                height="1.25rem"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>) : (
                            <svg
                                className="ps-1"
                                // xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                                fill="rgba(0, 0, 0, 0.6)"
                                width="1rem"
                                height="1rem"
                            >
                                <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                            </svg>
                        )}
                    </div>
                </div>
                {isOpen && <div className="collapsible-content">{children}</div>}
                <hr />
            </div>
        </>
    )
}


export default CollapsibleList