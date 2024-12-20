import { useDispatch } from "react-redux";

function BagItem({
  product_name,
  product_description,
  product_price,
  url,
  id,
  count,
}) {

  let  dispatch  = useDispatch();

  return (
    <li>
      <p>{product_name}</p>
      <p>{product_description}</p>
      <p>{product_price}</p>
      <img src={url} alt={product_name} />
      <button onClick={() => dispatch({type:'DELETE BAG', payload: id})}>DELETE</button>
      <div className="plus-minus">
        <button onClick={() => dispatch({type:'MINUS BAG', payload: id})}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch({type:'PLUS BAG', payload: id})}>+</button>
      </div>
    </li>
  );
}

export default BagItem;
