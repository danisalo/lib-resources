import React from "react";

import DesignStudios from "./DesignStudios";

const AllResources = ({ resources }) => {
    console.log({ resources })

    return (
        <>
            <div class="row">
                <div class="col-sm-3 col-lg-2 px-1 text-start">
                    <div>
                        <h2 class="my-1">Some title</h2>
                        <ul class="mb-2">
                            <li title="Blank">
                                <a href="">list entry</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Design Studios */}
                <div class="col-sm-3 col-lg-2 px-1 text-start">
                    <div>
                        <h2 class="my-1">Design Studios</h2>
                        <DesignStudios
                            resources={resources}
                        />
                    </div>
                </div>


                <div class="col-sm-3 col-lg-2 px-1 text-start">
                    <div>
                        <h2 class="my-1">Some title</h2>
                        <ul class="mb-2">
                            <li title="Blank">
                                <a href="">list entry</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-sm-3 col-lg-2 px-1 text-start">
                    <div>
                        <h2 class="my-1">Some title</h2>
                        <ul class="mb-2">
                            <li title="Blank">
                                <a href="">list entry</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-sm-3 col-lg-2 px-1 text-start">
                    <div>
                        <h2 class="my-1">Some title</h2>
                        <ul class="mb-2">
                            <li title="Blank">
                                <a href="">list entry</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-sm-3 col-lg-2 px-1 text-start">
                    <div>
                        <h2 class="my-1">Some title</h2>
                        <ul class="mb-2">
                            <li title="Blank">
                                <a href="">list entry</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}


export default AllResources