import React from "react"
import useAirtableData from "../hooks/useAirtableData"


const TypeFoundries = () => {

    const { data, loading } = useAirtableData('Type', 'Grid - All by Name')

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <>
            <ul class="mb-2">
                {data.map(resource => (
                    <>
                        <li key={resource.id} title="eventually set fields.description">
                            <a href={resource.fields.Website}>{resource.fields.Name} {resource.fields.Based}</a>
                        </li>
                    </>
                ))}
            </ul>
        </>
    )
}


export default TypeFoundries