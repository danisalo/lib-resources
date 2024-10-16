import React, { useState } from "react"
import useAirtableData from "../hooks/useAirtableData"

const GenericGridItem = ({ baseName, initialViewName, title, searchQuery, showFavoritesOnly }) => {

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

    const filteredData = data.filter((resource) => {
        if (!searchQuery || searchQuery.trim() === "") {
            return showFavoritesOnly ? resource.fields.Favorite : true;
        } else {
            const nameMatch = resource.fields.Name && resource.fields.Name.toLowerCase().includes(searchQuery.toLowerCase())
            const websiteMatch = resource.fields.Website && resource.fields.Website.toLowerCase().includes(searchQuery.toLowerCase())
            return nameMatch || websiteMatch
        }
    })


    return (
        <>
            <h3
                onClick={toggleView}
                className={`my-1 ${data[0].fields.Based || data[0].fields.From ? "filter-by-view" : ""}`}
            >
                {title}
            </h3>
            <ul className="mb-2">
                {filteredData.map((resource) => (
                    <li key={resource.id}
                        className="mb-2">
                        <a
                            href={resource.fields.Website}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={resource.fields.Description}
                        >
                            <div className="grid-item">
                                {resource.fields.Name && <span>{resource.fields.Name} </span>}
                                {addStar(resource)}
                                {resource.fields.From && <span>{resource.fields.From} </span>}
                                {resource.fields.Based && <span>{resource.fields.Based} </span>}
                                <p>{resource.fields.Description}</p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul >
        </>
    )
}


export default GenericGridItem