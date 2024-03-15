import React, { useState } from "react"
import useAirtableData from "../hooks/useAirtableData"

const GenericList = ({ baseName, initialViewName, title }) => {

    const [viewName, setViewName] = useState(initialViewName)
    const { data, loading } = useAirtableData(baseName, viewName)

    const toggleView = () => {
        if (data.length > 0 && (data[0].fields.Based || data[0].fields.From)) {
            setViewName((prevView) =>
                prevView === "Grid - All by Name" ? "Grid - All by Country" : "Grid - All by Name"
            )
        }
    }

    const addStar = (resource) => {
        if (resource.fields.Favorite) {
            return <span> &#9734;</span>
        } else {
            return null
        }
    }

    if (loading) {
        return <p>Loading...</p>
    }

    if (!baseName || data.length === 0) {
        return null
    }


    return (
        <>
            <h2
                onClick={toggleView}
                className={`my-1 ${data[0].fields.Based || data[0].fields.From ? "filter-by-view" : ""}`}
            >
                {title}
            </h2>
            <ul className="mb-2">
                {data.map((resource) => (
                    <li key={resource.id}>
                        <a
                            href={resource.fields.Website}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={resource.fields.Description}
                        >
                            {resource.fields.Name && <span>{resource.fields.Name} </span>}
                            {resource.fields.From && <span>{resource.fields.From} </span>}
                            {resource.fields.Based && <span>{resource.fields.Based} </span>}
                            {addStar(resource)}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}


export default GenericList