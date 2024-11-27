import ServicesItem from "./ServicesItem";
import { services } from "../../../public/data/data";

function Services() {
  return (
    <section className="services-list">
      <ul>
        {/* <ServicesItem
          serviceDescription={services[0].serviceDescription}
          serviceName={services[0].serviceName}
        />
        <ServicesItem
          serviceDescription={services[1].serviceDescription}
          serviceName={services[1].serviceName}
        />
        <ServicesItem
          serviceDescription={services[2].serviceDescription}
          serviceName={services[2].serviceName}
        />
        <ServicesItem
          serviceDescription={services[3].serviceDescription}
          serviceName={services[3].serviceName}
        />
        <ServicesItem
          serviceDescription={services[4].serviceDescription}
          serviceName={services[4].serviceName}
        />
        <ServicesItem
          serviceDescription={services[5].serviceDescription}
          serviceName={services[5].serviceName}
        />
        <ServicesItem
          serviceDescription={services[6].serviceDescription}
          serviceName={services[6].serviceName}
        />
        <ServicesItem
          serviceDescription={services[7].serviceDescription}
          serviceName={services[7].serviceName}
        />
        <ServicesItem
          serviceDescription={services[8].serviceDescription}
          serviceName={services[8].serviceName}
        />
        <ServicesItem
          serviceDescription={services[9].serviceDescription}
          serviceName={services[9].serviceName}
        />
        <ServicesItem
          serviceDescription={services[10].serviceDescription}
          serviceName={services[10].serviceName}
        />
        <ServicesItem
          serviceDescription={services[11].serviceDescription}
          serviceName={services[11].serviceName}
        /> */}
        {services.map((item, index) => (
          <ServicesItem
            key={index}
            serviceDescription={item.serviceDescription}
            serviceName={item.serviceName}
          />
        ))}
      </ul>
    </section>
  );
}

export default Services;
