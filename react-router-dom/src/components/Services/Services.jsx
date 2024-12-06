import React, { useState } from "react";
import ServicesItem from "./ServicesItem";
import AddForm from "../AddForm";
import LoginForm from "../LoginForm";
import { Link, Outlet, useOutletContext } from "react-router-dom";

 
function Services({servicesArray, setServices, bag, setBag }) {
  const [search, setSearch] = useState("");
 
  const filteredArray = servicesArray.filter((item) =>
    item.serviceName.toLowerCase().startsWith(search.toLowerCase())
  );
 
  return (
    <section className="services">
      <header className="services-header">
        <h1>Our Services</h1>
        <LoginForm />
      </header>
 
      <div className="services-controls">
        <input
          type="text"
          onInput={(e) => setSearch(e.target.value)}
          placeholder="Search services..."
          className="services-search"
        />
        <AddForm servicesArray={servicesArray} setServices={setServices} />
      </div>
      <Link to='about'>ABOUT</Link>
      <Link to='contacts'>CONTACTS</Link>
       <Outlet/>
    
 
      <ul className="services-list">
        {filteredArray.map((item, index) => (
          <ServicesItem
            key={index}
            obj={item}
            servicesArray={servicesArray}
            setServices={setServices}
            bag={bag}
            setBag={setBag}
          />
        ))}
      </ul>
    </section>
  );
}
 
export default Services;

// import React, { useState } from "react";
// import ServicesItem from "./ServicesItem";
// import AddForm from "../AddForm";
// import LoginForm from "../LoginForm";
// import { Link, Outlet, useOutletContext } from "react-router-dom";

 
// function Services() {
//   const [search, setSearch] = useState("");

//   let { servicesArray, setServices, bag, setBag } = useOutletContext()
 
//   const filteredArray = servicesArray.filter((item) =>
//     item.serviceName.toLowerCase().startsWith(search.toLowerCase())
//   );
 
//   return (
//     <section className="services">
//       <header className="services-header">
//         <h1>Our Services</h1>
//         <LoginForm />
//       </header>
 
//       <div className="services-controls">
//         <input
//           type="text"
//           onInput={(e) => setSearch(e.target.value)}
//           placeholder="Search services..."
//           className="services-search"
//         />
//         <AddForm servicesArray={servicesArray} setServices={setServices} />
//       </div>
//       <Link to='about'>ABOUT</Link>
//       <Link to='contacts'>CONTACTS</Link>
//        <Outlet/>
    
 
//       <ul className="services-list">
//         {filteredArray.map((item, index) => (
//           <ServicesItem
//             key={index}
//             obj={item}
//             servicesArray={servicesArray}
//             setServices={setServices}
//             bag={bag}
//             setBag={setBag}
//           />
//         ))}
//       </ul>
//     </section>
//   );
// }
 
// export default Services;