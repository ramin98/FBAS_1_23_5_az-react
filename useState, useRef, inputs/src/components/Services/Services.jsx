import ServicesItem from "./ServicesItem";
import { useState } from "react";


function Services({servicesArray,setServices}) {
  let [search, setSearch] = useState("");

  let filteredArray = servicesArray.filter((item) => item.serviceName.startsWith(search))

  return (
    <section className="services-list">
      <input type="text" onInput={(ev) => setSearch(ev.target.value)}/>
      <ul>
        
        {filteredArray.map((item, index) => (
          <ServicesItem
            key={index}
            obj={item}
            servicesArray={servicesArray}
            setServices={setServices}
          />
        ))}
      </ul>
    </section>
  );
}

export default Services;
