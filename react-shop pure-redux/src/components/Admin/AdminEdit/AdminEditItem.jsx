import { useContext } from "react";
import EditForm from "./EditForm";
import { MyContext } from "../../../App";

function AdminEdiItem({ product_name, product_description, product_price, url ,id }) {

  let {editAdminDispatch} = useContext(MyContext)

  return (
    <>
      <li>
      <p>{product_name}</p>
      <p>{product_description}</p>
      <p>{product_price}</p>
      <img src={url} alt={product_name} />
      <button onClick={() => editAdminDispatch({type:'DELETE', payload: id})}>DELETE</button>
      <input onChange={(ev) => editAdminDispatch({type:'CHOOSE ALL', payload: {id, checked: ev.target.checked}})} type="checkbox" />
      <EditForm product={{product_name, product_description, product_price,id}}/>
      </li>
    </>
  );
}

export default AdminEdiItem;
