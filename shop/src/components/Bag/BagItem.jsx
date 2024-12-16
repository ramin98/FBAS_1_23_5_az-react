import { useContext } from "react";
import { MyContext } from "../../App";

function BagItem({
  product_name,
  product_description,
  product_price,
  url,
  id,
  count,
}) {

  let { bagDispatch } = useContext(MyContext);

  return (
    <li>
      <p>{product_name}</p>
      <p>{product_description}</p>
      <p>{product_price}</p>
      <img src={url} alt={product_name} />
      <button onClick={() => bagDispatch({type:'DELETE BAG', payload: id})}>DELETE</button>
      <div className="plus-minus">
        <button onClick={() => bagDispatch({type:'MINUS BAG', payload: id})}>-</button>
        <span>{count}</span>
        <button onClick={() => bagDispatch({type:'PLUS BAG', payload: id})}>+</button>
      </div>
    </li>
  );
}

export default BagItem;
