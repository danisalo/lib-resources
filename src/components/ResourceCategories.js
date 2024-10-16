import React from "react"
import { useMediaQuery } from "react-responsive"

import CollapsibleList from "./CollapsibleList"
import GenericListItem from "./GenericListItem"
import GenericGridItem from "./GenericGridItem"

const ResourceCategories = ({ resourceCategories, searchQuery, showFavoritesOnly, viewMode }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
    const isDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1823 })
    const isBigScreen = useMediaQuery({ minWidth: 1824 })

    let categoryColumns
    let columnTitles

    if (isMobile) {
        // Single column with collapsables
        categoryColumns = [
            resourceCategories.slice(0, 5),
            resourceCategories.slice(5, 7),
            resourceCategories.slice(7, 10),
            resourceCategories.slice(10, 17),
            resourceCategories.slice(17, 22),
            resourceCategories.slice(22, 27)
        ]
        columnTitles = ["Search Engines", "Design Studios", "Type Studios", "Free SAAS", "Inspiration", "Miscellaneous"]
    } else if (isTablet) {
        const tabletColumn1 = [
            ...resourceCategories.slice(0, 5),
            ...resourceCategories.slice(14, 17),
        ]
        const tabletColumn3 = [
            ...resourceCategories.slice(7, 14),
            ...resourceCategories.slice(17, 27),
        ]
        // 3 columns
        categoryColumns = [
            tabletColumn1,
            resourceCategories.slice(5, 7),
            tabletColumn3,
        ]
    } else if (isDesktop) {
        // 6 columns
        categoryColumns = [
            resourceCategories.slice(0, 5),
            resourceCategories.slice(5, 7),
            resourceCategories.slice(7, 10),
            resourceCategories.slice(10, 17),
            resourceCategories.slice(17, 22),
            resourceCategories.slice(22, 27)
        ]
    } else if (isBigScreen) {
        // 8 columns
        categoryColumns = [
            resourceCategories.slice(0, 5),
            resourceCategories.slice(5, 7),
            resourceCategories.slice(7, 10),
            resourceCategories.slice(10, 17),
            resourceCategories.slice(17, 22),
            resourceCategories.slice(22, 27)
        ]
    }

    return (
        <>
            <div className="row">
                {isMobile && (
                    categoryColumns.map((column, columnIndex) => (
                        <div key={columnIndex} className="col-12 px-1 text-start">
                            <CollapsibleList title={columnTitles[columnIndex]} className="mb-4">
                                {column.map((category) => (
                                    <GenericListItem
                                        key={category.key}
                                        baseName={category.baseName}
                                        initialViewName="Grid - All by Name"
                                        title={category.title}
                                        searchQuery={searchQuery}
                                        showFavoritesOnly={showFavoritesOnly}
                                    />
                                ))}
                            </CollapsibleList>
                        </div>
                    ))
                )}
                {isTablet && (
                    categoryColumns.map((column, columnIndex) => (
                        <div key={columnIndex} className="col-4 px-1 text-start">
                            {column.map((category) => (
                                <GenericListItem
                                    key={category.key}
                                    baseName={category.baseName}
                                    initialViewName="Grid - All by Name"
                                    title={category.title}
                                    searchQuery={searchQuery}
                                    showFavoritesOnly={showFavoritesOnly}
                                />
                            ))}
                        </div>
                    ))
                )}
                {(isDesktop || isBigScreen) && (
                    <>
                        {(viewMode === 'list') &&
                            categoryColumns.map((column, columnIndex) => (
                                <div key={columnIndex} className="col-2 px-1 text-start">
                                    {column.map((category) => (
                                        <GenericListItem
                                            key={category.key}
                                            baseName={category.baseName}
                                            initialViewName="Grid - All by Name"
                                            title={category.title}
                                            searchQuery={searchQuery}
                                            showFavoritesOnly={showFavoritesOnly}
                                        />
                                    ))}
                                </div>
                            ))
                        }
                        {(viewMode === 'grid') &&
                            categoryColumns.map((column, columnIndex) => (
                                <div key={columnIndex} className="col-2 px-1 text-start">
                                    {column.map((category) => (
                                        <GenericGridItem
                                            key={category.key}
                                            baseName={category.baseName}
                                            initialViewName="Grid - All by Name"
                                            title={category.title}
                                            searchQuery={searchQuery}
                                            showFavoritesOnly={showFavoritesOnly}
                                        />
                                    ))}
                                </div>
                            ))
                        }
                    </>
                )}
            </div>
        </>
    )
}


export default ResourceCategories