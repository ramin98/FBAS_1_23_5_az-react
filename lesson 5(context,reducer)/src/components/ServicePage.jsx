import {  useLocation, useOutletContext, useParams } from "react-router-dom";

function ServicePage() {
  // let { bag } = useOutletContext();
  let { id } = useParams();
  let {state} = useLocation()
  console.log(state)
  // let elementIndex = bag.findIndex((item) => parseInt(id) === item.id);
  // console.log(id);

  if (!state) {
    return (
      <section>
        <h1>404 IS NOT FOUND!!!!</h1>
      </section>
    );
  }

  return (
    <section>
      <h1>ServicePage</h1>
      <div>
        <p>{state ? state.serviceName : "HAS NOT"}</p>
        <p>
          {state ? state.serviceDescription : "HAS NOT"}
        </p>
      </div>
    </section>
  );
}

export default ServicePage;

// import {  useOutletContext, useParams } from "react-router-dom";

// function ServicePage({ bag }) {
//   let { id } = useParams();
//   let elementIndex = bag.findIndex((item) => parseInt(id) === item.id);
//   console.log(id);

//   if (!bag[elementIndex]) {
//     return (
//       <section>
//         <h1>404 IS NOT FOUND!!!!</h1>
//       </section>
//     );
//   }

//   return (
//     <section>
//       <h1>ServicePage</h1>
//       <div>
//         <p>{bag[elementIndex] ? bag[elementIndex].serviceName : "HAS NOT"}</p>
//         <p>
//           {bag[elementIndex] ? bag[elementIndex].serviceDescription : "HAS NOT"}
//         </p>
//       </div>
//     </section>
//   );
// }

// export default ServicePage;

