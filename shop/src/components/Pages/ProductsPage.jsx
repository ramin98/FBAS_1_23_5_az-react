import { useContext } from "react";
import ProductsList from "../Products/ProductsList";
import { MyContext } from "../../App";

function ProductsPage() {
  let { productsDispatch } = useContext(MyContext);

  return (
    <section className="products-page">
      <h1>Products Page</h1>
      <select
        onChange={(ev) =>
          productsDispatch({
            type: "PRODUCTS SORTING",
            payload: ev.target.value,
          })
        }
      >
        <option value="PRICE DECREASE">PRICE INCREASE</option>
        <option value="PRICE INCREASE">PRICE DECREASE</option>
      </select>
      <ProductsList />
    </section>
  );
}

export default ProductsPage;
