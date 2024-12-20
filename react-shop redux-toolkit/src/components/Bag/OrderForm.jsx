import { useDispatch, useSelector } from "react-redux";

function OrderForm() {
  let dispatch = useDispatch();
  let bag = useSelector((state) => state.bag.bag);
  
  function handleOrderForm(ev) {
    ev.preventDefault();
    let formData = Object.fromEntries([...new FormData(ev.target)]);
    dispatch({ type: "ORDER FORM", payload: formData });
  }

  return (
    <div>
      <form onSubmit={handleOrderForm}>
        <input type="text" placeholder="customer_name" name="customer_name" />
        <input
          type="text"
          placeholder="customer_number"
          name="customer_number"
        />
        <input
          type="text"
          placeholder="customer_address"
          name="customer_address"
        />
        <button>ORDER</button>
      </form>
      <p>{bag.reduce((total, price) => total + price.totalPrice, 0)}</p>
    </div>
  );
}

export default OrderForm;
