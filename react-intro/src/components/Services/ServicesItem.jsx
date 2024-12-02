import EditForm from "./EditForm";
import { useState } from "react";

function ServicesItem({ obj, setServices, servicesArray }) {
  let [flag, setFlag] = useState(false)


  function handleDelete(id) {
    let newArr = [...servicesArray];
    let elementIndex = newArr.findIndex((item) => item.id === id);
    newArr.splice(elementIndex, 1);
    setServices(newArr);
  }

  function handleDelete(id) {
    let newArr = [...servicesArray];
    let elementIndex = newArr.findIndex((item) => item.id === id);
    newArr.splice(elementIndex, 1);
    setServices(newArr);
  }

  return (
    <li>
      <h3>{obj.serviceName}</h3>
      <p>{obj.serviceDescription}</p>
      <button onClick={() => handleDelete(obj.id)}>DELETE</button>
      <button onClick={() => setFlag(!flag)}>EDIT</button>

      <EditForm flag={flag} id={obj.id} setServices={setServices} servicesArray={servicesArray}/>
    </li>
  );
}

export default ServicesItem;
