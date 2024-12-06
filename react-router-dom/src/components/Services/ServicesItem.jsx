// import React, { useState } from "react";
// import EditForm from "./EditForm";
// import { useOutlet, useOutletContext } from "react-router-dom";
 
// function ServicesItem({obj}) {
//   const [isEditing, setIsEditing] = useState(false);

//   let {setServices, servicesArray, bag, setBag} = useOutletContext()
 
//   const handleDelete = (id) => {
//     const updatedServices = servicesArray.filter((item) => item.id !== id);
//     setServices(updatedServices);
//   };
 
//   const handleAddToBag = () => {
//     setBag([...bag, obj]);
//   };
 
//   return (
//     <li className="services-item">
//       <div className="services-item-content">
//         <h3>{obj.serviceName}</h3>
//         <p>{obj.serviceDescription}</p>
//       </div>
//       <div className="services-item-actions">
//         <button className="btn delete" onClick={() => handleDelete(obj.id)}>
//           Delete
//         </button>
//         <button className="btn add" onClick={handleAddToBag}>
//           Add to Bag
//         </button>
//         <button
//           className="btn edit"
//           onClick={() => setIsEditing(!isEditing)}
//         >
//           {isEditing ? "Cancel" : "Edit"}
//         </button>
//       </div>
 
//       {isEditing && (
//         <EditForm
//           serviceNameValue={obj.serviceName}
//           serviceDescriptionValue={obj.serviceDescription}
//           flag={isEditing}
//           id={obj.id}
//           setServices={setServices}
//           servicesArray={servicesArray}
//         />
//       )}
//     </li>
//   );
// }
 
// export default ServicesItem;

import React, { useState } from "react";
import EditForm from "./EditForm";
 
function ServicesItem({obj ,setServices, servicesArray, bag, setBag}) {
  const [isEditing, setIsEditing] = useState(false);

 
  const handleDelete = (id) => {
    const updatedServices = servicesArray.filter((item) => item.id !== id);
    setServices(updatedServices);
  };
 
  const handleAddToBag = () => {
    setBag([...bag, obj]);
  };
 
  return (
    <li className="services-item">
      <div className="services-item-content">
        <h3>{obj.serviceName}</h3>
        <p>{obj.serviceDescription}</p>
      </div>
      <div className="services-item-actions">
        <button className="btn delete" onClick={() => handleDelete(obj.id)}>
          Delete
        </button>
        <button className="btn add" onClick={handleAddToBag}>
          Add to Bag
        </button>
        <button
          className="btn edit"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>
 
      {isEditing && (
        <EditForm
          serviceNameValue={obj.serviceName}
          serviceDescriptionValue={obj.serviceDescription}
          flag={isEditing}
          id={obj.id}
          setServices={setServices}
          servicesArray={servicesArray}
        />
      )}
    </li>
  );
}
 
export default ServicesItem;