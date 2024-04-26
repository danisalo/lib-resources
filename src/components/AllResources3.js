import React, { useState } from "react"
import { useMediaQuery } from "react-responsive"

import SearchBar from "./SearchBar"
import ResourceCategories from "./ResourceCategories"

const AllResources = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
    const isDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1823 })
    const isBigScreen = useMediaQuery({ minWidth: 1824 })

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

    const resourceCategories = [
        {
            key: 1,
            baseName: "SearchEnginesConventional",
            title: "Search Engines Conventional",
        },
        {
            key: 2,
            baseName: "SearchEnginesAI",
            title: "Search Engines AI",
        },
        {
            key: 3,
            baseName: "SearchEnginesMedia",
            title: "Search Engines Media",
        },
        {
            key: 4,
            baseName: "SearchEnginesInt",
            title: "Search Engines Int",
        },
        {
            key: 5,
            baseName: "ImageGenerators",
            title: "Image Generators",
        },
        {
            key: 6,
            baseName: "DesignStudios",
            title: "Design Studios",
        },
        {
            key: 7,
            baseName: "Designers",
            title: "Designers",
        },
        {
            key: 8,
            baseName: "TypeFoundries",
            title: "Type Foundries",
        },
        {
            key: 9,
            baseName: "TypeInspo",
            title: "Type Inspo",
        },
        {
            key: 10,
            baseName: "TypeMarkets",
            title: "Type Markets",
        },
        {
            key: 11,
            baseName: "Indexing",
            title: "Indexing",
        },
        {
            key: 12,
            baseName: "BuildSites",
            title: "Build Sites",
        },
        {
            key: 13,
            baseName: "FileTransfering",
            title: "File Transfering",
        },
        {
            key: 14,
            baseName: "Workflow",
            title: "Workflow",
        },
        {
            key: 15,
            baseName: "WebPractices",
            title: "Web Practices",
        },
        {
            key: 16,
            baseName: "JSLibraries",
            title: "Creative JS",
        },
        {
            key: 17,
            baseName: "CSSMix",
            title: "CSS Mix",
        },
        {
            key: 18,
            baseName: "Critics",
            title: "Blogs",
        },
        {
            key: 19,
            baseName: "ExperimentalPortfolios",
            title: "Experimental Portfolios",
        },
        {
            key: 20,
            baseName: "SiteAwards",
            title: "Site Awards",
        },
        {
            key: 21,
            baseName: "UIInspo",
            title: "UI Inspo",
        },
        {
            key: 22,
            baseName: "FreeAssets",
            title: "Free Assets",
        },
        {
            key: 23,
            baseName: "TypeGames",
            title: "Type Games",
        },
        {
            key: 24,
            baseName: "MiscUtils",
            title: "Misc Utils",
        },
        {
            key: 25,
            baseName: "MiscMisc",
            title: "Misc Misc",
        },
        {
            key: 26,
            baseName: "Extensions",
            title: "Extensions",
        },
        {
            key: 27,
            baseName: "Experimental",
            title: "Experimental",
        },
        {
            key: 28,
            baseName: "Random",
            title: "Random",
        }
    ]

    return (
        <>
            {(isTablet || isDesktop || isBigScreen) && (
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
                    </div >
                </>
            )}
            <ResourceCategories
                resourceCategories={resourceCategories}
                searchQuery={searchQuery}
                showFavoritesOnly={showFavoritesOnly}
            />
        </>
    )
}


export default AllResources