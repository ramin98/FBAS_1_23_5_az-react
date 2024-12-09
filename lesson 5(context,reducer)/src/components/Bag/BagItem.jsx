import { Link } from "react-router-dom";

function BagItem({ obj }) {
  return (
    <li>
      <Link state={obj} to={`/service-page/${obj.id}`}>SHOW SERVICE</Link>
      <h3>{obj.serviceName}</h3>
      <p>{obj.serviceDescription}</p>
    </li>
  );
}

export default BagItem;
