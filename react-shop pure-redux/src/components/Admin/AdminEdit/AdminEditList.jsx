import { useEffect } from "react";
import AdminEdiItem from "./AdminEditItem";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../store/reducers/reducerFetchs/productsFetchs";

function AdminEditList() {

  let dispatch = useDispatch()
  let products = useSelector((state) => state.adminEdit.products)

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <ul>
      {products.map((item) => (
        <AdminEdiItem key={item.id} {...item} />
      ))}
    </ul>
  );
}
export default AdminEditList;
