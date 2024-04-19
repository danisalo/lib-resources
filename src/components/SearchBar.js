import React, { useState } from "react"

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("")

    const handleSearch = (event) => {
        const inputValue = event.target.value
        setSearchQuery(inputValue)
        onSearch(inputValue)
    }

    const clearSearch = () => {
        setSearchQuery(""); // Clear the search query
        onSearch(""); // Trigger search with empty query
    };

    return (
        <>
            <form>
                <div className="d-flex search-bar">
                    <div>
                        <label htmlFor="searchInput" className="search-input-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                fill="rgba(0, 0, 0, 1)"
                                width="1.2rem"
                                height="1.2rem"
                            >
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                            </svg>
                        </label>
                    </div>
                    <input
                        className="search-input"
                        id="searchInput"
                        type="text"
                        placeholder="Search site..."
                        aria-label="Search bar"
                        maxLength={25}
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                    {searchQuery && (
                        <svg
                            className="clear-text-icon"
                            onClick={clearSearch}
                            aria-label="Clear search text"
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
                    )}
                </div>
            </form>
        </>
    )
}


export default SearchBar