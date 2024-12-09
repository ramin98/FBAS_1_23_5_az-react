import BagItem from "./BagItem";
import { useContext } from "react";
import { MyContext } from "../../App";

function BagList() {
  let { stateBag } = useContext(MyContext);
  return (
    <section className="services-list">
      <ul>
        {stateBag.bag.map((item, index) => (
          <BagItem key={index} obj={item} />
        ))}
      </ul>
    </section>
  );
}

export default BagList;

// import BagItem from "./BagItem";

// function BagList({bag}) {
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
