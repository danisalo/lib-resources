import React from "react"

import GenericList from "./GenericList"


const AllResources = () => {
    return (
        <>
            <div class="row">
                {/* Search Engines */}
                <div class="col-sm-3 col-lg-2 px-1 text-start">
                    <GenericList
                        baseName="SearchEnginesConventional"
                        viewName="Grid - All by Name"
                        title="Search Engines (Conventional)"
                    />
                    <GenericList
                        baseName="SearchEnginesAI"
                        viewName="Grid - All by Name"
                        title="Search Engines (AI)"
                    />
                    <GenericList
                        baseName="SearchEnginesMedia"
                        viewName="Grid - All by Name"
                        title="Search Engines (Media)"
                    />
                    <GenericList
                        baseName="SearchEnginesInt"
                        viewName="Grid - All by Name"
                        title="Search Engines (International)"
                    />
                    <GenericList
                        baseName="ImageGenerators"
                        viewName="Grid - All by Name"
                        title="Image Generators (AI)"
                    />
                </div>

                {/* Design */}
                <div class="col-sm-3 col-lg-2 px-1 text-start">
                    <GenericList
                        baseName="DesignStudios"
                        viewName="Grid - All by Name"
                        title="Design Studios"
                    />
                    <GenericList
                        baseName="Designers"
                        viewName="Grid - All by Name"
                        title="Designers"
                    />
                </div>

                {/* Typography */}
                <div class="col-sm-3 col-lg-2 px-1 text-start">
                    <GenericList
                        baseName="TypeFoundries"
                        viewName="Grid - All by Name"
                        title="Type Foundries"
                    />
                    <GenericList
                        baseName="TypeInspo"
                        viewName="Grid - All by Name"
                        title="Type Inspo"
                    />
                    <GenericList
                        baseName="TypeMarkets"
                        viewName="Grid - All by Name"
                        title="Type Marketplaces"
                    />
                </div>

                {/* Indexing, Building Sites, File Transfering & Workflow */}
                <div class="col-sm-3 col-lg-2 px-1 text-start">
                    <h2>Indexing</h2>
                    <GenericList
                        baseName="Indexing"
                        viewName="Grid - All by Name"
                        title="Indexing"
                    />
                    <GenericList
                        baseName="BuildSites"
                        viewName="Grid - All by Name"
                        title="Build Sites"
                    />
                    <GenericList
                        baseName="FileTransfering"
                        viewName="Grid - All by Name"
                        title="File Transfering"
                    />
                    <GenericList
                        baseName="Workflow"
                        viewName="Grid - All by Name"
                        title="Workflow"
                    />
                </div>

                {/* Web Practices, Inspo, Libraries & Other Resources */}
                <div class="col-sm-3 col-lg-2 px-1 text-start">
                    <h2>Web Practices</h2>
                    <GenericList
                        baseName="WebPractices"
                        viewName="Grid - All by Name"
                        title="Web Practices"
                    />
                    <GenericList
                        baseName="UIInspo"
                        viewName="Grid - All by Name"
                        title="UI Inspo"
                    />
                    <GenericList
                        baseName="FreeAssets"
                        viewName="Grid - All by Name"
                        title="Free Assets"
                    />
                    <GenericList
                        baseName="TypeGames"
                        viewName="Grid - All by Name"
                        title="Type Games"
                    />
                    <GenericList
                        baseName="CreativeJS"
                        viewName="Grid - All by Name"
                        title="Creative JS Libraries"
                    />
                    <GenericList
                        baseName="CSSMix"
                        viewName="Grid - All by Name"
                        title="CSS Mix"
                    />
                </div>

                {/* Misc */}
                <div class="col-sm-3 col-lg-2 px-1 text-start">
                    <h2>Experimental</h2>
                    <h2>Misc</h2>
                    <h2>Random</h2>
                </div>

            </div>
        </>
    )
}


export default AllResources