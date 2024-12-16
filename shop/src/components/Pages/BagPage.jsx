import { useContext } from "react";
import BagList from "../Bag/BagList";
import OrderForm from "../Bag/OrderForm";
import { MyContext } from "../../App";

function BagPage() {
  let {bagDispatch} = useContext(MyContext)
  return (
    <section className="products-page">
      <h1>Bage Page</h1>
      <div className="bag-container">
      <BagList/>
      <OrderForm/>
      </div>
      <button onClick={() => bagDispatch({type:'CLEAR BAG'})}>CLER BAG</button>
    </section>
  );
}

export default BagPage;
