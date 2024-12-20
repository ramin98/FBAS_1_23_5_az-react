import BagList from "../Bag/BagList";
import OrderForm from "../Bag/OrderForm";
import { useDispatch } from "react-redux";

function BagPage() {
  let dispatch = useDispatch()
  return (
    <section className="products-page">
      <h1>Bage Page</h1>
      <div className="bag-container">
      <BagList/>
      <OrderForm/>
      </div>
      <button onClick={() => dispatch({type:'CLEAR BAG'})}>CLER BAG</button>
    </section>
  );
}

export default BagPage;
