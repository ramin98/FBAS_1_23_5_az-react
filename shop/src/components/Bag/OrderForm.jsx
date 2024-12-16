import { useContext } from "react";
import { MyContext } from "../../App";

function OrderForm() {
  let { bagDispatch, bagState } = useContext(MyContext);

  function handleOrderForm(ev) {
    ev.preventDefault();
    let formData = Object.fromEntries([...new FormData(ev.target)]);
    bagDispatch({ type: "ORDER FORM", payload: formData });
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
      <p>{bagState.bag.reduce((total, price) => total + price.totalPrice, 0)}</p>
    </div>
  );
}

export default OrderForm;
