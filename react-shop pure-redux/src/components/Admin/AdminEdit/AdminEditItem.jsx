import { useDispatch, useSelector } from "react-redux";
import EditForm from "./EditForm";

function AdminEdiItem({ product_name, product_description, product_price, url ,id }) {

  let dispatch = useDispatch()
  let ids = useSelector((state) => state.adminEdit.ids)

  return (
    <>
      <li>
      <p>{product_name}</p>
      <p>{product_description}</p>
      <p>{product_price}</p>
      <img src={url} alt={product_name} />
      <button onClick={() => dispatch({type:'DELETE', payload: id})}>DELETE</button>
      <input checked={ids.includes(id)} onChange={() => dispatch({type:'CHOOSE ALL', payload: id})} type="checkbox" />
      <EditForm product={{product_name, product_description, product_price,id}}/>
      </li>
    </>
  );
}

export default AdminEdiItem;
