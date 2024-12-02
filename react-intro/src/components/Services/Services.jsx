import ServicesItem from "./ServicesItem";


function Services({servicesArray,setServices}) {

  
  return (
    <section className="services-list">
      <ul>
        
        {servicesArray.map((item, index) => (
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
