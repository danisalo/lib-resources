import React from "react"
import useAirtableData from "../hooks/useAirtableData"


const DesignStudios = () => {

    const { data, loading } = useAirtableData('General', 'Grid - All by Name')

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


export default DesignStudios


// Filter only Type Foundries:

// const services = resource.fields.Services || []; // Ensure services is an array

// return (
//   <>
//     {services.includes("Type Foundry") ? (
//       <div>
//         <a href={resource.fields.Website}>{resource.fields.Name}</a>
//         {/* Other content for Type Foundry */}
//       </div>
//     ) : null}
//   </>
// );
// };