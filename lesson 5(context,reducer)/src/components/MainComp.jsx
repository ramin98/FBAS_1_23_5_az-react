// import { Outlet, Route, Routes } from "react-router-dom";
// import { services } from "../../public/data/data";
// import AddForm from "./AddForm";
// import BagList from "./Bag/BagList";
// import LoginForm from "./LoginForm";
// import Services from "./Services/Services";
// import { useState } from "react";
// import Home from "./Home";
// import ServicePage from "./ServicePage";
// import About from "./Services/About";
// import Contacts from "./Services/Contacts";

// function MainComp() {
//   let [servicesArray, setServices] = useState(services);
//   let [bag, setBag] = useState([]);

//   return (
//     <main>
//       <Routes>
//         <Route
//           path="services"
//           element={
//             <Services
//               setBag={setBag}
//               bag={bag}
//               setServices={setServices}
//               servicesArray={servicesArray}
//             />
//           }
//         >
//           <Route path="about" element={<About />} />
//           <Route path="contacts" element={<Contacts />} />
//         </Route>
//         <Route path="/bag" element={<BagList bag={bag} />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/service-page/:id" element={<ServicePage bag={bag} />} />
//       </Routes>
//     </main>
//   );
// }

// export default MainComp;

import { Outlet } from "react-router-dom";

function MainComp() {
  return (
    <main>
      <Outlet/>
    </main>
  );
}

export default MainComp;
