import React from "react";

const DesignStudios = ({ resources }) => {
    return (
        <>
            <ul class="mb-2">
                {resources.map(resource => (
                    <>
                        <li title="Blank">
                            <a href={resource.fields.Website}>{resource.fields.Name} {resource.fields.Based}</a>
                        </li>
                    </>
                ))}
            </ul>
        </>
    )
}


export default DesignStudios