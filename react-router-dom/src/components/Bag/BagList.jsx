// import { useOutlet, useOutletContext } from "react-router-dom";
// import BagItem from "./BagItem";

// function BagList() {
//     let {bag} = useOutletContext()
//   return (
//     <section className="services-list">
//       <ul>
        
//         {bag.map((item, index) => (
//           <BagItem
//             key={index}
//             obj={item}
//           />
//         ))}
//       </ul>
//     </section>
//   );
// }

// export default BagList;

import BagItem from "./BagItem";

function BagList({bag}) {
  return (
    <section className="services-list">
      <ul>
        
        {bag.map((item, index) => (
          <BagItem
            key={index}
            obj={item}
          />
        ))}
      </ul>
    </section>
  );
}

export default BagList;

