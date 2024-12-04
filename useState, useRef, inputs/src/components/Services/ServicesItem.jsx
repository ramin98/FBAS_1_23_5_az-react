import EditForm from "./EditForm";
import { useState, useRef } from "react";

function ServicesItem({ obj, setServices, servicesArray }) {
  let [flag, setFlag] = useState(false);
  // let [serviceNameValue, setNameValue] = useState('');
  // let [serviceDescriptionValue, setServiceDescriptionValue] = useState('');

  let serviceNameValue = useRef('');
  let serviceDescriptionValue = useRef('');
  let editButton = useRef(null);

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
      <button
        ref={editButton}
        onClick={() => {
          serviceNameValue.current = obj.serviceName
          serviceDescriptionValue.current = obj.serviceDescription
          console.log(editButton.current)
          setFlag(!flag);

        }}
      >
        EDIT
      </button>

      <EditForm
        serviceNameValue={serviceNameValue}
        serviceDescriptionValue={serviceDescriptionValue}
        flag={flag}
        id={obj.id}
        setServices={setServices}
        servicesArray={servicesArray}
      />
    </li>
  );
}

export default ServicesItem;
