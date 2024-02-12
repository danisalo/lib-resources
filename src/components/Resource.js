import React from "react";

const Resource = ({resource}) => {
    return (
        <>
            <a href={resource.fields.Website}>{resource.fields.Name}</a>
        </>
      )
}

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

// Stop code block here

export default Resource