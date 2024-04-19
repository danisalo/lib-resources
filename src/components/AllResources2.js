import React, { useState } from "react"
import GenericList from "./GenericList"
import SearchBar from "./SearchBar"

const AllResources = () => {

    const [searchQuery, setSearchQuery] = useState("")
    const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
    const [viewMode, setViewMode] = useState("list")

    const handleSearch = (inputValue) => {
        setSearchQuery(inputValue)
        if (inputValue) {
            setShowFavoritesOnly(false)
        }
    }

    const handleToggleFavorites = () => {
        setShowFavoritesOnly(!showFavoritesOnly)
        setSearchQuery("")
    }

    const toggleViewMode = () => {
        setViewMode((prevMode) => (prevMode === "list" ? "grid" : "list"));
    }


    return (
        <>
            <div className="row align-items-center mb-4">
                <div className="col-sm-5 col-lg-4 px-0">
                    {/* Search bar */}
                    <SearchBar onSearch={handleSearch} />
                </div>
                <div className="col-md-auto px-0">
                    <input
                        id="favoritesInput"
                        type="button"
                        value="Favorites"
                        className={`toggle-button ${showFavoritesOnly ? 'active' : ''}`}
                        onClick={handleToggleFavorites}
                    />
                </div >
                {/* <button onClick={toggleViewMode}>
                    {viewMode === "list" ? "Grid" : "List"}
                </button> */}
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
                    {/* <GenericList
                        baseName="CoolSites"
                        initialViewName="Grid - All by Name"
                        title="Cool Sites"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    /> */}
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
                        baseName="Critics"
                        initialViewName="Grid - All by Name"
                        title="Blogs"
                        searchQuery={searchQuery}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                    <GenericList
                        baseName="SiteAwards"
                        initialViewName="Grid - All by Name"
                        title="Site Awards"
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
                        baseName="Experimental"
                        initialViewName="Grid - All by Name"
                        title="Experimental"
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