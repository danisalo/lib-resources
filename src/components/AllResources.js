import React from "react"
import GenericList from "./GenericList"


const AllResources = () => {
    return (
        <>
            <div className="row">
                {/* Search Engines */}
                <div className="col-sm-3 col-lg-2 px-1 text-start">
                    <GenericList
                        baseName="SearchEnginesConventional"
                        initialViewName="Grid - All by Name"
                        title="Search Engines (Conventional)"
                    />
                    <GenericList
                        baseName="SearchEnginesAI"
                        initialViewName="Grid - All by Name"
                        title="Search Engines (AI)"
                    />
                    <GenericList
                        baseName="SearchEnginesMedia"
                        initialViewName="Grid - All by Name"
                        title="Search Engines (Media)"
                    />
                    <GenericList
                        baseName="SearchEnginesInt"
                        initialViewName="Grid - All by Name"
                        title="Search Engines (International)"
                    />
                    <GenericList
                        baseName="ImageGenerators"
                        initialViewName="Grid - All by Name"
                        title="Image Generators (AI)"
                    />
                    <GenericList
                        baseName="FindWork"
                        initialViewName="Grid - All by Name"
                        title="Find Work"
                    />
                </div>

                {/* Design */}
                <div className="col-sm-3 col-lg-2 px-1 text-start">
                    <GenericList
                        baseName="DesignStudios"
                        initialViewName="Grid - All by Name"
                        title="Design Studios"
                    />
                    <GenericList
                        baseName="Designers"
                        initialViewName="Grid - All by Name"
                        title="Designers"
                    />
                </div>

                {/* Typography */}
                <div className="col-sm-3 col-lg-2 px-1 text-start">
                    <GenericList
                        baseName="TypeFoundries"
                        initialViewName="Grid - All by Name"
                        title="Type Foundries"
                    />
                    <GenericList
                        baseName="TypeInspo"
                        initialViewName="Grid - All by Name"
                        title="Type Inspo"
                    />
                    <GenericList
                        baseName="TypeMarkets"
                        initialViewName="Grid - All by Name"
                        title="Type Marketplaces"
                    />
                </div>

                {/* Indexing, Building Sites, File Transfering, Workflow & Guidelines*/}
                <div className="col-sm-3 col-lg-2 px-1 text-start">
                    <GenericList
                        baseName="CoolSites"
                        initialViewName="Grid - All by Name"
                        title="Cool Sites"
                    />
                    <GenericList
                        baseName="Indexing"
                        initialViewName="Grid - All by Name"
                        title="Indexing"
                    />
                    <GenericList
                        baseName="BuildSites"
                        initialViewName="Grid - All by Name"
                        title="Build Sites"
                    />
                    <GenericList
                        baseName="FileTransfering"
                        initialViewName="Grid - All by Name"
                        title="File Transfering"
                    />
                    <GenericList
                        baseName="Workflow"
                        initialViewName="Grid - All by Name"
                        title="Workflow"
                    />
                    <GenericList
                        baseName="WebPractices"
                        initialViewName="Grid - All by Name"
                        title="Web Practices"
                    />
                    <GenericList
                        baseName="JSLibraries"
                        initialViewName="Grid - All by Name"
                        title="Creative JS Libraries"
                    />
                    <GenericList
                        baseName="CSSMix"
                        initialViewName="Grid - All by Name"
                        title="CSS Mix"
                    />
                </div>

                {/* Inspo, Libraries & Other Resources */}
                <div className="col-sm-3 col-lg-2 px-1 text-start">
                    <GenericList
                        baseName="SiteAwards"
                        initialViewName="Grid - All by Name"
                        title="Site Awards"
                    />
                    <GenericList
                        baseName="Critics"
                        initialViewName="Grid - All by Name"
                        title="Critics (?)"
                    />
                    <GenericList
                        baseName="UIInspo"
                        initialViewName="Grid - All by Name"
                        title="UI Inspo"
                    />
                    <GenericList
                        baseName="FreeAssets"
                        initialViewName="Grid - All by Name"
                        title="Free Assets"
                    />
                    <GenericList
                        baseName="TypeGames"
                        initialViewName="Grid - All by Name"
                        title="Type Games"
                    />
                </div>

                {/* Misc */}
                <div className="col-sm-3 col-lg-2 px-1 text-start">
                    <GenericList
                        baseName="Experimental"
                        initialViewName="Grid - All by Name"
                        title="Experimental"
                    />
                    <GenericList
                        baseName="MiscUtils"
                        initialViewName="Grid - All by Name"
                        title="Misc Utils"
                    />
                    <GenericList
                        baseName="MiscMisc"
                        initialViewName="Grid - All by Name"
                        title="Misc Misc"
                    />
                    <GenericList
                        baseName="Extensions"
                        initialViewName="Grid - All by Name"
                        title="Extensions"
                    />
                    <GenericList
                        baseName="Random"
                        initialViewName="Grid - All by Name"
                        title="Random"
                    />
                </div>

            </div>
        </>
    )
}


export default AllResources