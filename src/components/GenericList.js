import React from "react"
import useAirtableData from "../hooks/useAirtableData"

const GenericList = ({ baseName, viewName, title }) => {

    const { data, loading } = useAirtableData(baseName, viewName)

    // if (data.length === 0) {
    //     return null
    // }

    if (loading && !data.length === 0) {
        return <p>Loading...</p>
    }

    return (
        <>
            <h2 className="my-1">{title}</h2>
            <ul className="mb-2">
                {data.map((resource) => (
                    < li key={resource.id} >
                        <a href={resource.fields.Website}>
                            {resource.fields.Name && <span>{resource.fields.Name} </span>}
                            {resource.fields.From && <span>{resource.fields.From} </span>}
                            {resource.fields.Based && <span>{resource.fields.Based} </span>}
                        </a>
                    </li>
                ))}
            </ul >
        </>
    )
}


export default GenericList