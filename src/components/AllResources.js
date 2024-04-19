import React, { useState } from "react"
import GenericList from "./GenericList"


const AllResources = () => {

    const [searchQuery, setSearchQuery] = useState("")
    const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)

    const handleSearch = (event) => {
        const inputValue = event.target.value
        setSearchQuery(inputValue)
        if (inputValue) {
            setShowFavoritesOnly(false)
        }
    }

    const handleToggleFavorites = () => {
        setShowFavoritesOnly(!showFavoritesOnly)
        setSearchQuery("")
    }


    return (
        <>
            <div className="row align-items-center mb-4">
                <div className="col-md-5">
                    {/* Search bar */}
                    <form className="form-inline">
                        <div className="input-group search-bar">
                            <div className="input-group-prepend">
                                <label htmlFor="searchInput" className="input-group-text">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        fill="rgba(0, 0, 0, 1)"
                                        width="1.2rem"
                                        height="1.2rem">
                                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                                    </svg>
                                </label>
                            </div>
                            <input
                                id="searchInput"
                                type="text"
                                placeholder="Search site..."
                                aria-label="Search bar"
                                className="form-control"
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                        </div>
                    </form >
                </div>
                <div className="col-md-auto">
                    <input
                        id="favoritesInput"
                        type="button"
                        value="Favorites"
                        className={`toggle-button ${showFavoritesOnly ? 'active' : ''}`}
                        onClick={handleToggleFavorites}
                    />
                </div >
            </div >
            <div className="row">
                {/* Search Engines */}
                <div className="col-sm-3 col-lg-2 px-1 text-start">
                    <GenericList
                        baseName="SearchEnginesConventional"
                        initialViewName="Grid - All by Name"
                        title="Search Engines (Conventional)"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                    <GenericList
                        baseName="SearchEnginesAI"
                        initialViewName="Grid - All by Name"
                        title="Search Engines (AI)"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                    <GenericList
                        baseName="SearchEnginesMedia"
                        initialViewName="Grid - All by Name"
                        title="Search Engines (Media)"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                    <GenericList
                        baseName="SearchEnginesInt"
                        initialViewName="Grid - All by Name"
                        title="Search Engines (International)"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                    <GenericList
                        baseName="ImageGenerators"
                        initialViewName="Grid - All by Name"
                        title="Image Generators (AI)"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                    <GenericList
                        baseName="FindWork"
                        initialViewName="Grid - All by Name"
                        title="Find Work"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                </div>

                {/* Design */}
                <div className="col-sm-3 col-lg-2 px-1 text-start">
                    <GenericList
                        baseName="DesignStudios"
                        initialViewName="Grid - All by Name"
                        title="Design Studios"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                    <GenericList
                        baseName="Designers"
                        initialViewName="Grid - All by Name"
                        title="Designers"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                </div>

                {/* Typography */}
                <div className="col-sm-3 col-lg-2 px-1 text-start">
                    <GenericList
                        baseName="TypeFoundries"
                        initialViewName="Grid - All by Name"
                        title="Type Foundries"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                    <GenericList
                        baseName="TypeInspo"
                        initialViewName="Grid - All by Name"
                        title="Type Inspo"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                    <GenericList
                        baseName="TypeMarkets"
                        initialViewName="Grid - All by Name"
                        title="Type Marketplaces"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                </div>

                {/* Indexing, Building Sites, File Transfering, Workflow & Guidelines*/}
                <div className="col-sm-3 col-lg-2 px-1 text-start">
                    <GenericList
                        baseName="CoolSites"
                        initialViewName="Grid - All by Name"
                        title="Cool Sites"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                    <GenericList
                        baseName="Indexing"
                        initialViewName="Grid - All by Name"
                        title="Indexing"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                    <GenericList
                        baseName="BuildSites"
                        initialViewName="Grid - All by Name"
                        title="Build Sites"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                    <GenericList
                        baseName="FileTransfering"
                        initialViewName="Grid - All by Name"
                        title="File Transfering"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                    <GenericList
                        baseName="Workflow"
                        initialViewName="Grid - All by Name"
                        title="Workflow"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                    <GenericList
                        baseName="WebPractices"
                        initialViewName="Grid - All by Name"
                        title="Web Practices"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                    <GenericList
                        baseName="JSLibraries"
                        initialViewName="Grid - All by Name"
                        title="Creative JS Libraries"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                    <GenericList
                        baseName="CSSMix"
                        initialViewName="Grid - All by Name"
                        title="CSS Mix"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                </div>

                {/* Inspo, Libraries & Other Resources */}
                <div className="col-sm-3 col-lg-2 px-1 text-start">
                    <GenericList
                        baseName="SiteAwards"
                        initialViewName="Grid - All by Name"
                        title="Site Awards"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                    <GenericList
                        baseName="Critics"
                        initialViewName="Grid - All by Name"
                        title="Critics (?)"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                    <GenericList
                        baseName="UIInspo"
                        initialViewName="Grid - All by Name"
                        title="UI Inspo"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                    <GenericList
                        baseName="FreeAssets"
                        initialViewName="Grid - All by Name"
                        title="Free Assets"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                    <GenericList
                        baseName="TypeGames"
                        initialViewName="Grid - All by Name"
                        title="Type Games"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                </div>

                {/* Misc */}
                <div className="col-sm-3 col-lg-2 px-1 text-start">
                    <GenericList
                        baseName="Experimental"
                        initialViewName="Grid - All by Name"
                        title="Experimental"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                    <GenericList
                        baseName="MiscUtils"
                        initialViewName="Grid - All by Name"
                        title="Misc Utils"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                    <GenericList
                        baseName="MiscMisc"
                        initialViewName="Grid - All by Name"
                        title="Misc Misc"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                    <GenericList
                        baseName="Extensions"
                        initialViewName="Grid - All by Name"
                        title="Extensions"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                    <GenericList
                        baseName="Random"
                        initialViewName="Grid - All by Name"
                        title="Random"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                </div>

            </div>
        </>
    )
}


export default AllResources