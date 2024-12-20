import { useDispatch } from "react-redux";
import ProductsList from "../Products/ProductsList";
import { productsSorting } from "../../store/reducers/reducerState/reducerProducts";

function ProductsPage() {

  let dispatch = useDispatch()

  return (
    <section className="products-page">
      <h1>Products Page</h1>
      <select
        onChange={(ev) =>
          dispatch(productsSorting(ev.target.value))
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
